# Notion Database Setup Guide

This guide explains how to set up your Notion databases for the portfolio website.

## Required Environment Variables

Add these to your `.env.local` file:

```env
NOTION_TOKEN=your_notion_integration_token_here
NOTION_DB_ID=your_projects_database_id_here
NOTION_TESTIMONIALS_DB_ID=your_testimonials_database_id_here
NOTION_MEMORIES_DB_ID=your_memories_database_id_here
NOTION_BLOGS_DB_ID=your_blogs_database_id_here
NOTION_SOCIALS_DB_ID=your_socials_database_id_here
```

## Database Structures

### 1. Projects Database (NOTION_DB_ID)

**Required Properties:**

- `p_title` - Title field (Project name)
- `p_desc` - Text field (Project description)
- `p_tech` - Multi-select field (Technologies used)
- `p_img` - URL field (Project image URL)
- `p_github` - URL field (GitHub repository link)
- `p_live` - URL field (Live demo link)

### 2. Testimonials Database (NOTION_TESTIMONIALS_DB_ID)

**Required Properties:**

- `name` - Title field (Person's name)
- `designation` - Text field (Job title/role)
- `testimonial` - Text field (The testimonial text)
- `profile` - URL field (Profile picture URL)

### 3. Memories Database (NOTION_MEMORIES_DB_ID)

**Required Properties:**

- `mem_img` - URL or Files field (Memory image)

### 4. Blogs Database (NOTION_BLOGS_DB_ID)

**Required Properties:**

- `blog_name` - Title field (Blog post title)
- `blog_desc` - Text field (Blog post description)
- `blog_img` - URL or Files field (Blog post cover image - optional, leave empty if no image)
- `blog_url` - **URL field type** (Link to the blog post) - **IMPORTANT: Must be URL type, not Text or Rich Text!**

**Setting up blog_url correctly:**

1. In your Notion database, click on the `blog_url` column header
2. Make sure the property type is set to **URL** (icon looks like a link 🔗)
3. If it's currently **Text** or **Rich Text**, you need to:
   - Create a new property with URL type
   - Copy the URLs from the old field
   - Delete the old text field
   - Rename the new URL field to `blog_url`

**Note:** The first blog entry will be displayed as "BlogLatest" (featured with full description and image) and the next 2 entries as "BlogMini" cards (title + image only, no description) in a grid layout.

### 5. Socials Database (NOTION_SOCIALS_DB_ID)

**Required Properties:**

- `platform` - Title field (Must be one of: `Resume`, `Github`, `Linkedin`, `Twitter`, `Instagram`, `email`)
- `link` - URL field (The link for that platform)

**Important:** The platform names are case-insensitive and will be converted to lowercase. Make sure to name them exactly as shown (e.g., "Resume", "Github", "Linkedin", "Twitter", "Instagram", "email").

**Example Entries:**
| platform | link |
|-----------|------|
| Linkedin | https://www.linkedin.com/in/your-profile |
| Github | https://github.com/your-username |
| Instagram | https://www.instagram.com/your-username |
| Twitter | https://twitter.com/your-username |
| email | mailto:your.email@example.com |
| Resume | https://drive.google.com/file/d/your-resume-id/view |

## Setup Steps

1. **Create Notion Integration:**

   - Go to https://www.notion.so/my-integrations
   - Click "New integration"
   - Give it a name (e.g., "Portfolio Website")
   - Copy the "Internal Integration Token" - this is your `NOTION_TOKEN`

2. **Create Databases:**

   - Create 5 separate databases in Notion with the structures listed above
   - Add the required properties to each database

3. **Connect Integration to Databases:**

   - Open each database in Notion
   - Click the "..." menu in the top-right
   - Select "Add connections"
   - Choose your integration

4. **Get Database IDs:**

   - Open each database as a full page
   - Copy the ID from the URL: `https://www.notion.so/[DATABASE_ID]?v=...`
   - Add these IDs to your `.env.local` file

5. **Populate Data:**
   - Add your projects, testimonials, memories, blogs, and social links
   - The website will automatically fetch and display this data

## Features

- **Projects:** Displayed in a responsive carousel (1/2/3 items based on screen size)
- **Testimonials:** Static masonry layout with 2 columns
- **Memories:** Masonry photo gallery on the About page
- **Blogs:** Latest blog featured prominently, next 4 in grid layout
- **Socials:** Displayed in multiple places (Connect section, Contact section, Hero buttons)

## Fallback Behavior

If Notion databases are not configured or fail to load, the website will:

- Use local JSON files as fallback for some sections
- Show empty state messages for others
- Continue functioning without errors
