# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Repository created on GitHub

## Step 1: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Complete portfolio setup"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click on "New Repository" or go to: https://github.com/new
3. Repository name: `my-portfolio`
4. Description: "Professional portfolio website"
5. Keep it **Public**
6. **Don't initialize with README** (we already have one)
7. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/chetan1804/my-portfolio.git
git branch -M master
git push -u origin master
```

## Step 4: Enable GitHub Pages

### Option A: Using GitHub Actions (Recommended - Already Configured)

1. Go to your repository on GitHub
2. Click on **Settings**
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow file is already created at `.github/workflows/deploy.yml`
6. Push any changes to trigger the deployment:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
7. Wait for the action to complete (check the Actions tab)
8. Your site will be live at: `https://chetan1804.github.io/my-portfolio/`

### Option B: Manual Deployment

```bash
npm run deploy
```

This command will:

1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub will automatically serve it

## Step 5: Verify Deployment

1. Go to **Settings → Pages** in your GitHub repository
2. You should see: "Your site is live at https://chetan1804.github.io/my-portfolio/"
3. Click the link to view your portfolio

## 🔄 Updating Your Portfolio

Every time you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

The GitHub Actions workflow will automatically build and deploy your changes.

## 🛠️ Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution**: Make sure the `base` in `vite.config.js` matches your repository name:

```javascript
export default defineConfig({
  base: "/my-portfolio/",
});
```

### Issue: Styles not loading

**Solution**: Clear your browser cache or open in incognito mode

### Issue: GitHub Actions failing

**Solution**:

1. Check the Actions tab for error logs
2. Make sure GitHub Pages is enabled in repository settings
3. Ensure the workflow file has correct permissions

### Issue: Changes not appearing

**Solution**:

1. Wait 2-3 minutes for deployment to complete
2. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear browser cache

## 📝 Important Notes

1. **Repository Name**: If you want your portfolio at `username.github.io` (without `/my-portfolio/`):

   - Create a repository named: `chetan1804.github.io`
   - Change `base: '/'` in `vite.config.js`

2. **Custom Domain**: To use a custom domain:

   - Add a `CNAME` file in the `public` folder with your domain
   - Configure DNS settings with your domain provider
   - Add the custom domain in GitHub Pages settings

3. **Build Issues**: If build fails:
   ```bash
   npm install
   npm run build
   ```
   Fix any errors before pushing

## 🌟 Workflow File Explained

The `.github/workflows/deploy.yml` file:

- Triggers on push to `master` branch
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages automatically

## 📱 Testing Before Deployment

Always test locally before deploying:

```bash
# Development server
npm run dev

# Production preview
npm run build
npm run preview
```

## 🎉 Success!

Once deployed, share your portfolio:

- LinkedIn
- Resume
- Job applications
- Social media

Your portfolio URL: `https://chetan1804.github.io/my-portfolio/`

---

**Need Help?** Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
