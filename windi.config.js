import { defineConfig } from "windicss/helpers"

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#101724",
                surface: "#171E2A",
                blue: "#4F58E9",
                purple: "#7856CE",
                text: "#FEFEFF",
                subtext: "#858AA0",
            },
            fontFamily: {
                "sans": "Poppins"
            },
            spacing: {
                2.5: "0.625rem"
            },
            boxShadow: {
                "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)"
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-8deg)" },
                    "50%": { transform: "rotate(3deg)" }
                }
            },
            animation: {
                wiggle: "wiggle 8s ease-in-out infinite"
            }
        }
    },
    shortcuts: {
        "gradient": "bg-gradient-to-r from-blue to-purple",


        "button": "tracking-wide text-3xl rounded-2xl w-full h-20",
        "transitions": "transition-all duration-100",
        "column": "grid grid-cols-1 content-start gap-2.5",
        "text-field": "transitions px-4 rounded-xl text-xl outline-none bg-surface bg-opacity-0 placeholder-text placeholder-opacity-45 focus:(bg-opacity-100 placeholder-opacity-75)"
    },
    plugins: [
        
    ]
})