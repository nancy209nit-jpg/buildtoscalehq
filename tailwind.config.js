/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "min-h-screen","bg-gray-50","text-gray-900","antialiased",
    "max-w-5xl","mx-auto","px-6","py-20",
    "flex","items-center","justify-between","mb-12",
    "text-3xl","sm:text-4xl","font-extrabold","tracking-tight",
    "mt-2","text-sm","text-gray-600","space-x-4",
    "text-4xl","sm:text-5xl","font-bold","leading-tight",
    "mt-6","text-lg","mt-8","space-y-3","gap-3","rounded-lg",
    "bg-white","shadow","mt-1","w-8","h-8",
    "flex-col","sm:flex-row","gap-3","max-w-md",
    "rounded-md","border","border-gray-200","px-4","py-3","shadow-sm",
    "mt-3","text-xs","mt-4","inline-block","bg-indigo-600",
    "mt-6","border-t","pt-4","mt-16","grid","grid-cols-1","sm:grid-cols-3","gap-6",
    "p-6","rounded-xl","mt-20","text-center","text-gray-500"
  ],
  theme: { extend: {} },
  plugins: [],
}
