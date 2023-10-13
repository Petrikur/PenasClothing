import type { Product } from "@/typings";
export function ProductDetails({ product }: { product: Product }) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Details & Care</h2>
        <ul className="list-disc pl-4">
          <li>Waterproof, breathable and lightweight</li>
          <li>Drawcord-toggle hood</li>
          <li>Adjustable hook-and-loop cuffs</li>
          <li>Elastic/drawstring hem</li>
          <li>Gore-Tex® waterproofing provides all-condition dryness</li>
          <li>Windproof</li>
          <li>Fully taped seams</li>
          <li>100% polyester</li>
          <li>
            bluesign®-approved fabric, made with tested and sustainably produced
            components
          </li>
          <li>Machine wash, tumble dry</li>
          <li>Imported</li>
          <li>Item #6991211</li>
        </ul>
      </div>
    );
  }
  