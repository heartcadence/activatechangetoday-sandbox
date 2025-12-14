import os
import subprocess
import shutil

def get_user_input(prompt):
    """Gets user input from the command line."""
    return input(prompt)

def run_command(command):
    """Runs a command in the shell and prints the output."""
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(e.stderr)
        raise

def main():
    """Main function to automate the CI/CD pipeline."""
    print("CI/CD Pipeline Automation for GitHub Pages and Cloudflare Pages")

    # Get user input
    build_tool = get_user_input("Enter your build tool (e.g., 'next', 'jekyll', 'vite'): ")
    repo_url = get_user_input("Enter your GitHub repository URL (e.g., 'https://github.com/user/repo.git'): ")
    
    # --- Build Step ---
    print("\n--- Building the website ---")
    if build_tool.lower() == 'next':
        build_command = "npm run next build && npm run next export"
    elif build_tool.lower() == 'jekyll':
        build_command = "jekyll build"
    elif build_tool.lower() == 'vite':
        build_command = "npm run build"
    else:
        print(f"Error: Build tool '{build_tool}' is not supported by this script.")
        return

    try:
        run_command(build_command)
        print("Build successful!")
    except subprocess.CalledProcessError:
        print("Build failed. Please check the error messages above.")
        return

    # --- GitHub Pages Deployment ---
    print("\n--- Deploying to GitHub Pages ---")
    
    # Create a new branch for deployment
    try:
        run_command("git checkout -B gh-pages")
        print("Created and checked out 'gh-pages' branch.")
    except subprocess.CalledProcessError:
        print("Failed to create 'gh-pages' branch. Please check your Git repository.")
        return

    # Copy build output to the root directory
    build_output_dir = 'out' if build_tool.lower() == 'next' else '_site' if build_tool.lower() == 'jekyll' else 'dist'
    
    try:
        # Move all files from the build output directory to the root
        for item in os.listdir(build_output_dir):
            s = os.path.join(build_output_dir, item)
            d = os.path.join('.', item)
            if os.path.isdir(s):
                shutil.copytree(s, d, dirs_exist_ok=True)
            else:
                shutil.copy2(s, d)
        print(f"Copied contents of '{build_output_dir}' to the root directory.")
    except Exception as e:
        print(f"Error copying build output: {e}")
        return

    # Add, commit, and push to the gh-pages branch
    try:
        run_command("git add .")
        run_command("git commit -m 'Deploy to GitHub Pages'")
        run_command(f"git push -f {repo_url} gh-pages")
        print("Successfully deployed to GitHub Pages!")
    except subprocess.CalledProcessError:
        print("Failed to deploy to GitHub Pages. Please check the error messages.")
    finally:
        # Return to the main branch
        run_command("git checkout main")


    # --- Cloudflare Pages Deployment ---
    print("\n--- Deploying to Cloudflare Pages ---")
    print("Cloudflare Pages deployment is typically automated by connecting your GitHub repository in the Cloudflare dashboard.")
    print("Please follow these steps:")
    print("1. Go to your Cloudflare dashboard.")
    print("2. Navigate to 'Workers & Pages'.")
    print("3. Click 'Create application' and select the 'Pages' tab.")
    print("4. Connect to your GitHub account and select your repository.")
    print("5. In the 'Build settings', configure the following:")
    print(f"   - Framework preset: Select the preset for '{build_tool}'.")
    print(f"   - Build command: '{build_command}'")
    print(f"   - Build output directory: '{build_output_dir}'")
    print("6. Save and Deploy.")
    print("After the initial setup, Cloudflare Pages will automatically deploy on every push to your main branch.")


if __name__ == "__main__":
    main()
