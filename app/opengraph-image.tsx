import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// export const runtime = "edge";

export const alt = "Tarun Singh - Full Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Read the logo file
    const logoData = await fs.promises.readFile(path.join(process.cwd(), "public", "logo.png"));
    const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
                        display: "flex",
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
                    {/* Real Logo Image */}
                    <img
                        src={logoSrc}
                        width="100"
                        height="100"
                        style={{
                            marginRight: 20,
                            borderRadius: 20,
                        }}
                    />
                    <div style={{ fontSize: 60, fontWeight: "bold", color: "white", display: "flex" }}>
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
                    Full Stack Developer • Technical Writer • AI/ML Enthusiast • Open Source
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
