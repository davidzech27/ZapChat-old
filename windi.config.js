import { defineConfig } from "windicss/helpers"

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#101724",
                blue: "4F58E9",
                purple: "7856CE",
                text: "#FEFEFF",
                subtext: "#858AA0",
            },
            // fontFamily: {
            //     "sans": ""
            // },
            spacing: {
                2.5: "0.625rem"
            }
        }
    },
    shortcuts: {
        "button": "tracking-wide text-3xl rounded-2xl w-full h-20",
        "transitions": "transition-all duration-100",
        "column": "grid grid-cols-1 content-start gap-2.5",
        "text-field": "w-full h-12 px-4 rounded-xl text-xl outline-none bg-surface bg-opacity-0 placeholder-text placeholder-opacity-45 focus:(bg-opacity-100 placeholder-opacity-75) transitions"
    },
    plugins: [
        
    ]
})