export default function BusinessSince({ startYear = 2005 }) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;

  return (
    <div className="text-md text-neutral-700 italic py-4">
      Trusted for {years}+ Years of Honest Auctions.
    </div>
  );
}
