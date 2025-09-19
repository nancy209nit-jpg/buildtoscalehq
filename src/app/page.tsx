// src/app/page.tsx
const FORM_ACTION = "https://formspree.io/f/mnnbepqg"; // "https://formspree.io/f/your-form-id"; // <- replace with your form endpoint
const PRODUCT_LINK = "https://gumroad.com/l/your-product-id"; // <- replace with your product checkout link

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              FAANG PM Interview Preparation
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Focused training and playbooks to help senior & principal product
              managers crack FAANG interviews.
            </p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#why" className="hover:underline">
              Why
            </a>
            <a href="#products" className="hover:underline">
              Products
            </a>
            <a href="#join" className="hover:underline">
              Get Started
            </a>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Crafting Stellar Product Pitches in High-Pressure Interviews
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Master the frameworks and delivery that FAANG interviewers
              reward — concise problem framing, high-impact tradeoffs, and
              leadership signaling under time pressure.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow">
                  🎯
                </div>
                <div>
                  <strong>Framework-first:</strong> Structured templates for
                  product cases, pitches, and tradeoff analyses.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow">
                  🧭
                </div>
                <div>
                  <strong>High-pressure rehearsals:</strong> Scripts, timed
                  practice routines, and debrief templates.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow">
                  🚀
                </div>
                <div>
                  <strong>Interview signals:</strong> How to show vision,
                  influence, and execution focus for senior/principal roles.
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <form
                action={FORM_ACTION}
                method="POST"
                className="flex flex-col sm:flex-row gap-3 max-w-md"
                id="join"
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your work email"
                  className="flex-1 rounded-md border border-gray-200 px-4 py-3 bg-white shadow-sm"
                />
                <input type="hidden" name="source" value="faang-onepager-lead" />
                <button
                  type="submit"
                  className="rounded-md px-5 py-3 bg-black text-white font-semibold"
                >
                  Get the FAANG Pitch Template (Free)
                </button>
              </form>
              <p className="mt-3 text-xs text-gray-500">
                  No spam — unsubscribe anytime. Free resource: &quot;FAANG Pitch
                  Template&quot; (Notion + Google Doc).
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold">First Paid Product</h3>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-semibold">
                Crafting Stellar Product Pitches in High-Pressure Environments
              </p>
              <p className="mt-2">What’s inside:</p>
              <ol className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Complete pitch framework + sample answers (Notion + Google Doc)</li>
                <li>• 10 timed practice cases with scoring rubric</li>
                <li>• Video walkthroughs of model answers</li>
                <li>• One reusable slide + one-pager executive brief template</li>
              </ol>
              <p className="mt-4 font-semibold">Intro price: $49.99</p>
              <div className="mt-4">
                <a
                  href={PRODUCT_LINK}
                  className="inline-block rounded-md px-5 py-3 bg-indigo-600 text-white font-semibold"
                >
                  Buy for $49.99
                </a>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-gray-600">
              <strong>Roadmap:</strong> After launch — Vision & Roadmap kit,
              then Behavioral Leadership kit. Bundle options will follow.
            </div>
          </div>
        </div>

        <section id="why" className="mt-16">
          <h4 className="text-sm font-semibold text-gray-600">Why this matters</h4>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Targeted practice</h5>
              <p className="mt-2 text-sm text-gray-600">
                Practice materials mirror FAANG interview formats, not generic PM exercises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Signal & execution</h5>
              <p className="mt-2 text-sm text-gray-600">
                We teach how to communicate product judgement while signaling leadership readiness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Quick wins</h5>
              <p className="mt-2 text-sm text-gray-600">
                Use the templates immediately in mock interviews and live interview loops.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="mt-16">
          <h4 className="text-sm font-semibold text-gray-600">Planned Products</h4>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Pitch Mastery</h5>
              <p className="mt-2 text-sm text-gray-600">Crafting Stellar Product Pitches — $49.99</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Vision & Roadmapping</h5>
              <p className="mt-2 text-sm text-gray-600">Mastering Product Vision & Roadmap for Principal Roles — $49.99</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h5 className="font-semibold">Behavioral Leadership</h5>
              <p className="mt-2 text-sm text-gray-600">Excelling in Behavioral Interviews for Cross-Functional Leadership — $49.99</p>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BuildToScaleHQ — FAANG PM Interview Preparation.
        </footer>
      </section>
    </main>
  );
}