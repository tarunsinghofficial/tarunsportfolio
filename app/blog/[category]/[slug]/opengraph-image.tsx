import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/app/lib/mdx";

// export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

type Props = {
    params: {
        category: string;
        slug: string;
    };
};

export default async function Image({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0a0a0a",
                        color: "white",
                    }}
                >
                    <div style={{ fontSize: 60, fontWeight: "bold" }}>devtarun</div>
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#0a0a0a",
                    color: "white",
                    fontFamily: "sans-serif",
                    position: "relative",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        backgroundImage:
                            "radial-gradient(circle at 25px 25px, rgba(52, 211, 153, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(52, 211, 153, 0.05) 2%, transparent 0%)",
                        backgroundSize: "100px 100px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "80px",
                        zIndex: 10,
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 50,
                                height: 50,
                                borderRadius: 12,
                                backgroundColor: "rgba(52, 211, 153, 0.1)",
                                border: "1px solid rgba(52, 211, 153, 0.2)",
                                marginRight: 16,
                                color: "#34d399",
                                fontSize: 24,
                                fontWeight: "bold",
                            }}
                        >
                            &lt;/&gt;
                        </div>
                        <div
                            style={{
                                fontSize: 24,
                                color: "#a1a1aa",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            {post.category.replace("-", " ")}
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <div
                            style={{
                                fontSize: 64,
                                fontWeight: "bold",
                                lineHeight: 1.1,
                                background:
                                    "linear-gradient(to bottom right, #ffffff 0%, #a1a1aa 100%)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {post.title}
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                color: "#a1a1aa",
                                lineHeight: 1.4,
                                maxWidth: 900,
                            }}
                        >
                            {post.description}
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 40,
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            paddingTop: 40,
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    backgroundColor: "#27272a",
                                    marginRight: 16,
                                    border: "2px solid #34d399",
                                }}
                            />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                                    Tarun Singh
                                </div>
                                <div style={{ fontSize: 16, color: "#a1a1aa" }}>
                                    @devtarun
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: 20,
                                color: "#34d399",
                                fontWeight: "bold",
                            }}
                        >
                            Read more &rarr;
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
