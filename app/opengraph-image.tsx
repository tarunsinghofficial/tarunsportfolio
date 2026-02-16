import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tarun Singh - Full Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
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
                    fontFamily: "sans-serif",
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
                        backgroundImage:
                            "radial-gradient(circle at 25px 25px, rgba(52, 211, 153, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(52, 211, 153, 0.1) 2%, transparent 0%)",
                        backgroundSize: "100px 100px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                    }}
                >
                    {/* Logo Mockup */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: 20,
                            border: "2px solid rgba(255,255,255,0.1)",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            marginRight: 20,
                            color: "#34d399",
                            fontSize: 40,
                            fontWeight: "bold",
                        }}
                    >
                        &lt;/&gt;
                    </div>
                    <div style={{ fontSize: 60, fontWeight: "bold", color: "white" }}>
                        dev<span style={{ color: "#34d399" }}>tarun</span>
                    </div>
                </div>

                <div
                    style={{
                        fontSize: 30,
                        color: "#a1a1aa",
                        textAlign: "center",
                        maxWidth: 800,
                    }}
                >
                    Full Stack Developer • AI/ML Enthusiast • Open Source
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
