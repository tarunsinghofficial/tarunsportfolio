// app/lib/notion.ts
import { Client } from "@notionhq/client";

export async function getProjects() {
    // If Notion credentials are not set, return empty array
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DB_ID) {
        console.warn("Notion credentials not configured. Returning empty projects.");
        return [];
    }

    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const response = await notion.databases.query({
            database_id: process.env.NOTION_DB_ID,
            sorts: [{ property: "p_title", direction: "ascending" }],
        } as any);

        console.log("First project data:", JSON.stringify(response.results[0], null, 2));

        return response.results.map((page: any) => {
            // Handle URL property type for images
            const imageUrl = page.properties.p_img?.url || "";

            console.log(`Project: ${page.properties.p_title?.title?.[0]?.plain_text}, Image URL: ${imageUrl}`);

            return {
                title: page.properties.p_title?.title?.[0]?.plain_text || "",
                description: page.properties.p_desc?.rich_text?.[0]?.plain_text || "",
                tech: page.properties.p_tech?.multi_select?.map((t: any) => t.name) || [],
                image: imageUrl,
                github: page.properties.p_github?.url || "",
                live: page.properties.p_live?.url || "",
            };
        });
    } catch (error) {
        console.error("Error fetching projects from Notion:", error);
        return [];
    }
}

export async function getTestimonials() {
    // If Notion credentials are not set, return empty array
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_TESTIMONIALS_DB_ID) {
        console.warn("Notion testimonials credentials not configured. Returning empty testimonials.");
        return [];
    }

    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const response = await notion.databases.query({
            database_id: process.env.NOTION_TESTIMONIALS_DB_ID,
            sorts: [{ property: "name", direction: "ascending" }],
        } as any);

        console.log("First testimonial data:", JSON.stringify(response.results[0], null, 2));

        return response.results.map((page: any) => {
            return {
                name: page.properties.name?.title?.[0]?.plain_text || "",
                designation: page.properties.designation?.rich_text?.[0]?.plain_text || "",
                testimonial: page.properties.testimonial?.rich_text?.[0]?.plain_text || "",
                profile: page.properties.profile?.url || "",
            };
        });
    } catch (error) {
        console.error("Error fetching testimonials from Notion:", error);
        return [];
    }
}

export async function getMemories() {
    // If Notion credentials are not set, return empty array
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_MEMORIES_DB_ID) {
        console.warn("Notion memories credentials not configured. Returning empty memories.");
        return [];
    }

    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const response = await notion.databases.query({
            database_id: process.env.NOTION_MEMORIES_DB_ID,
        } as any);

        console.log("First memory data:", JSON.stringify(response.results[0], null, 2));

        return response.results.map((page: any) => {
            return {
                image: page.properties.mem_img?.url || page.properties.mem_img?.files?.[0]?.file?.url || page.properties.mem_img?.files?.[0]?.external?.url || "",
                id: page.id,
            };
        }).filter((memory: any) => memory.image); // Filter out entries without images
    } catch (error) {
        console.error("Error fetching memories from Notion:", error);
        return [];
    }
}

export async function getBlogs() {
    // If Notion credentials are not set, return empty array
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_BLOGS_DB_ID) {
        console.warn("Notion blogs credentials not configured. Returning empty blogs.");
        return [];
    }

    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const response = await notion.databases.query({
            database_id: process.env.NOTION_BLOGS_DB_ID,
        } as any);

        console.log("First blog data:", JSON.stringify(response.results[0], null, 2));

        return response.results.map((page: any) => {
            return {
                title: page.properties.blog_name?.title?.[0]?.plain_text || "",
                description: page.properties.blog_desc?.rich_text?.[0]?.plain_text || "",
                image: page.properties.blog_img?.url || page.properties.blog_img?.files?.[0]?.file?.url || page.properties.blog_img?.files?.[0]?.external?.url || "",
                url: page.properties.blog_url?.url || "",
            };
        });
    } catch (error) {
        console.error("Error fetching blogs from Notion:", error);
        return [];
    }
}

export async function getSocials() {
    // If Notion credentials are not set, return empty object
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_SOCIALS_DB_ID) {
        console.warn("Notion socials credentials not configured. Returning empty socials.");
        return {
            linkedin: "",
            github: "",
            instagram: "",
            twitter: "",
            email: "",
            resume: "",
        };
    }

    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const response = await notion.databases.query({
            database_id: process.env.NOTION_SOCIALS_DB_ID,
        } as any);

        console.log("Socials data:", JSON.stringify(response.results, null, 2));

        // Create a key-value map from the results
        const socialsMap: any = {
            linkedin: "",
            github: "",
            instagram: "",
            twitter: "",
            email: "",
            resume: "",
        };

        response.results.forEach((page: any) => {
            // Try to get the platform name from the page title (first column)
            const platform = page.properties.platform?.title?.[0]?.plain_text?.toLowerCase() || "";
            // Get the link from the 'link' property
            const link = page.properties.link?.url || "";

            if (platform && link && socialsMap.hasOwnProperty(platform)) {
                socialsMap[platform] = link;
            }
        });

        return socialsMap;
    } catch (error) {
        console.error("Error fetching socials from Notion:", error);
        return {
            linkedin: "",
            github: "",
            instagram: "",
            twitter: "",
            email: "",
            resume: "",
        };
    }
}

