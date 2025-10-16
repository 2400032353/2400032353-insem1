import React from "react";

export function Card({ children, className = "", as: Component = "div", ...rest }) {
  return (
    <Component
      className={`border rounded-2xl p-6 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 space-y-6">
      <h1 className="text-2xl font-bold">Card Examples</h1>

      <Card>
        <h2 className="text-lg font-semibold">Simple Text Card</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          This Card wraps plain text and keeps consistent border, padding and background.
        </p>
      </Card>

      <Card className="max-w-md">
        <img
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=60"
          alt="Example"
          className="w-full rounded-md mb-4"
        />
        <figcaption className="text-sm text-gray-500">A scenic photograph inside a Card.</figcaption>
      </Card>

      <Card>
        <h3 className="font-medium">Card with Actions</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Use cards for grouping UI elements like buttons.</p>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-lg border">Cancel</button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Confirm</button>
        </div>
      </Card>

      <Card>
        <h3 className="font-medium">Subscribe</h3>
        <form className="mt-3 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
          <input className="border rounded px-3 py-2" placeholder="Email" />
          <button className="mt-2 px-4 py-2 rounded bg-green-600 text-white">Subscribe</button>
        </form>
      </Card>

      <Card as="section" className="max-w-xl">
        <h4 className="font-semibold">List inside Card</h4>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </Card>

      <p className="text-xs text-gray-500">
        Tip: move the Card component to <code>Card.js</code> and import it where needed.
      </p>
    </div>
  );
}
