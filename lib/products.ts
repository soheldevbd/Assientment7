export type Product = {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  category: string;
  categoryName: string;
  unit: string;
  price: number;
  change: number;
  description: string;
  min: number;
  max: number;
  markets: { name: string; price: number; location: string }[];
};
export const fallbackProducts: Product[] = [
  {
    id: '1',
    slug: 'miniket-chal',
    name: 'মিনিকেট চাল',
    emoji: '🍚',
    category: 'chal',
    categoryName: 'চাল',
    unit: 'প্রতি কেজি',
    price: 72,
    change: 2.1,
    description: 'পরিবারের প্রতিদিনের খাবারের জন্য জনপ্রিয় সরু চাল।',
    min: 68,
    max: 78,
    markets: [
      { name: 'কারওয়ান বাজার', price: 70, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 72, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 75, location: 'ঢাকা' },
    ],
  },
  {
    id: '2',
    slug: 'atap-chal',
    name: 'আতপ চাল',
    emoji: '🌾',
    category: 'chal',
    categoryName: 'চাল',
    unit: 'প্রতি কেজি',
    price: 65,
    change: -1.4,
    description: 'দৈনন্দিন রান্নার উপযোগী আতপ চাল।',
    min: 60,
    max: 70,
    markets: [
      { name: 'কারওয়ান বাজার', price: 63, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 66, location: 'ঢাকা' },
    ],
  },
  {
    id: '3',
    slug: 'alu',
    name: 'আলু',
    emoji: '🥔',
    category: 'sobji',
    categoryName: 'সবজি',
    unit: 'প্রতি কেজি',
    price: 35,
    change: -2.9,
    description: 'তাজা দেশি আলু।',
    min: 30,
    max: 40,
    markets: [
      { name: 'কারওয়ান বাজার', price: 32, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 35, location: 'ঢাকা' },
    ],
  },
  {
    id: '4',
    slug: 'peyaj',
    name: 'পেঁয়াজ',
    emoji: '🧅',
    category: 'sobji',
    categoryName: 'সবজি',
    unit: 'প্রতি কেজি',
    price: 80,
    change: 4.2,
    description: 'দেশি পেঁয়াজের খুচরা বাজারদর।',
    min: 75,
    max: 90,
    markets: [
      { name: 'কারওয়ান বাজার', price: 78, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 84, location: 'ঢাকা' },
    ],
  },
  {
    id: '5',
    slug: 'roshun',
    name: 'রসুন',
    emoji: '🧄',
    category: 'moshla',
    categoryName: 'মসলা',
    unit: 'প্রতি কেজি',
    price: 190,
    change: 1.2,
    description: 'রান্নার জন্য প্রয়োজনীয় দেশি রসুন।',
    min: 175,
    max: 210,
    markets: [
      { name: 'কারওয়ান বাজার', price: 185, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 195, location: 'ঢাকা' },
    ],
  },
  {
    id: '6',
    slug: 'mosur-dal',
    name: 'মসুর ডাল',
    emoji: '🫘',
    category: 'dal',
    categoryName: 'ডাল',
    unit: 'প্রতি কেজি',
    price: 125,
    change: -0.8,
    description: 'প্রোটিনসমৃদ্ধ মসুর ডাল।',
    min: 115,
    max: 135,
    markets: [
      { name: 'কারওয়ান বাজার', price: 120, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 128, location: 'ঢাকা' },
    ],
  },
  {
    id: '7',
    slug: 'soyabean-oil',
    name: 'সয়াবিন তেল',
    emoji: '🫗',
    category: 'tel',
    categoryName: 'তেল',
    unit: 'প্রতি লিটার',
    price: 170,
    change: 0,
    description: 'পরিবারের রান্নার ব্যবহৃত সয়াবিন তেল।',
    min: 165,
    max: 175,
    markets: [
      { name: 'কারওয়ান বাজার', price: 168, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 172, location: 'ঢাকা' },
    ],
  },
  {
    id: '8',
    slug: 'ilish-mach',
    name: 'ইলিশ মাছ',
    emoji: '🐟',
    category: 'mach',
    categoryName: 'মাছ',
    unit: 'প্রতি কেজি',
    price: 1250,
    change: 3.5,
    description: 'মৌসুমি ইলিশ মাছের আনুমানিক খুচরা দাম।',
    min: 1100,
    max: 1450,
    markets: [
      { name: 'কারওয়ান বাজার', price: 1200, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 1300, location: 'ঢাকা' },
    ],
  },
  {
    id: '9',
    slug: 'dim',
    name: 'ডিম',
    emoji: '🥚',
    category: 'protein',
    categoryName: 'প্রোটিন',
    unit: 'প্রতি ডজন',
    price: 145,
    change: -1.8,
    description: 'ফার্মের মুরগির ডিম, প্রতি ডজন।',
    min: 138,
    max: 155,
    markets: [
      { name: 'কারওয়ান বাজার', price: 142, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 148, location: 'ঢাকা' },
    ],
  },
  {
    id: '10',
    slug: 'murgi',
    name: 'ব্রয়লার মুরগি',
    emoji: '🍗',
    category: 'protein',
    categoryName: 'প্রোটিন',
    unit: 'প্রতি কেজি',
    price: 185,
    change: 2.6,
    description: 'ব্রয়লার মুরগির আনুমানিক খুচরা দাম।',
    min: 175,
    max: 200,
    markets: [
      { name: 'কারওয়ান বাজার', price: 180, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 190, location: 'ঢাকা' },
    ],
  },
  {
    id: '11',
    slug: 'begun',
    name: 'বেগুন',
    emoji: '🍆',
    category: 'sobji',
    categoryName: 'সবজি',
    unit: 'প্রতি কেজি',
    price: 55,
    change: -3.1,
    description: 'তাজা মৌসুমি বেগুন।',
    min: 45,
    max: 65,
    markets: [
      { name: 'কারওয়ান বাজার', price: 50, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 58, location: 'ঢাকা' },
    ],
  },
  {
    id: '12',
    slug: 'morich',
    name: 'কাঁচা মরিচ',
    emoji: '🌶️',
    category: 'sobji',
    categoryName: 'সবজি',
    unit: 'প্রতি কেজি',
    price: 120,
    change: 5.3,
    description: 'ঝাল রান্নার জন্য কাঁচা মরিচ।',
    min: 100,
    max: 140,
    markets: [
      { name: 'কারওয়ান বাজার', price: 115, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 125, location: 'ঢাকা' },
    ],
  },
  {
    id: '13',
    slug: 'ada',
    name: 'আদা',
    emoji: '🫚',
    category: 'moshla',
    categoryName: 'মসলা',
    unit: 'প্রতি কেজি',
    price: 220,
    change: 1.9,
    description: 'রান্নার জন্য আদা।',
    min: 200,
    max: 240,
    markets: [
      { name: 'কারওয়ান বাজার', price: 215, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 225, location: 'ঢাকা' },
    ],
  },
  {
    id: '14',
    slug: 'chini',
    name: 'চিনি',
    emoji: '🍬',
    category: 'onnanno',
    categoryName: 'অন্যান্য',
    unit: 'প্রতি কেজি',
    price: 135,
    change: 0,
    description: 'দৈনন্দিন ব্যবহারের চিনি।',
    min: 130,
    max: 140,
    markets: [
      { name: 'কারওয়ান বাজার', price: 132, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 137, location: 'ঢাকা' },
    ],
  },
  {
    id: '15',
    slug: 'tomato',
    name: 'টমেটো',
    emoji: '🍅',
    category: 'sobji',
    categoryName: 'সবজি',
    unit: 'প্রতি কেজি',
    price: 60,
    change: -1.1,
    description: 'তাজা টমেটো।',
    min: 50,
    max: 70,
    markets: [
      { name: 'কারওয়ান বাজার', price: 55, location: 'ঢাকা' },
      { name: 'মোহাম্মদপুর কৃষি মার্কেট', price: 62, location: 'ঢাকা' },
    ],
  },
  {
    id: '16',
    slug: 'kola',
    name: 'কলা',
    emoji: '🍌',
    category: 'fol',
    categoryName: 'ফল',
    unit: 'প্রতি ডজন',
    price: 90,
    change: 0.6,
    description: 'পাকা কলা, প্রতি ডজন।',
    min: 80,
    max: 100,
    markets: [
      { name: 'কারওয়ান বাজার', price: 85, location: 'ঢাকা' },
      { name: 'মিরপুর ১ বাজার', price: 92, location: 'ঢাকা' },
    ],
  },
];
export const categories = [
  { slug: 'sobji', name: 'সবজি', emoji: '🥬' },
  { slug: 'chal', name: 'চাল', emoji: '🌾' },
  { slug: 'dal', name: 'ডাল', emoji: '🫘' },
  { slug: 'mach', name: 'মাছ', emoji: '🐟' },
  { slug: 'protein', name: 'মাছ-মাংস-ডিম', emoji: '🥚' },
  { slug: 'moshla', name: 'মসলা', emoji: '🌶️' },
  { slug: 'tel', name: 'তেল', emoji: '🫗' },
  { slug: 'fol', name: 'ফল', emoji: '🍌' },
  { slug: 'onnanno', name: 'অন্যান্য', emoji: '🛒' },
];
export const money = (n: number) => new Intl.NumberFormat('bn-BD').format(n);
function finiteNumber(value: unknown): number | null {
  if (typeof value === 'string') value = value.replace(/[,৳\s]/g, '');
  if (value === null || value === undefined || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      'https://api.api-store.workers.dev/api/bazardor/products',
      {
        next: { revalidate: 300 },
      },
    );
    if (!response.ok) throw new Error('Product API unavailable');
    const json = await response.json();
    const rows = Array.isArray(json)
      ? json
      : (json?.products ?? json?.data ?? json?.results ?? []);
    if (!Array.isArray(rows) || rows.length === 0) return fallbackProducts;

    const normalized = rows.map((p: any, index: number) => {
      const name =
        p.name_bn ??
        p.nameBn ??
        p.name ??
        p.title_bn ??
        p.title ??
        p.product_name ??
        '';
      const slug = String(
        p.slug ?? p.name_en ?? p.nameEn ?? p.id ?? `product-${index + 1}`,
      )
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9-]+/g, '-')
        .replace(/^-|-$/g, '');
      const price = finiteNumber(
        p.price ??
          p.current_price ??
          p.currentPrice ??
          p.today_price ??
          p.todayPrice ??
          p.retail_price ??
          p.amount,
      );
      const previousPrice = finiteNumber(
        p.previous_price ?? p.previousPrice ?? p.old_price ?? p.yesterday_price,
      );
      const changeFromApi = finiteNumber(
        p.change ?? p.price_change ?? p.priceChange ?? p.change_percent,
      );
      const change =
        changeFromApi ??
        (price !== null && previousPrice !== null && previousPrice > 0
          ? ((price - previousPrice) / previousPrice) * 100
          : 0);
      const markets = Array.isArray(p.markets)
        ? p.markets.map((m: any) => ({
            name: String(m.name ?? m.market_name ?? 'স্থানীয় বাজার'),
            price: finiteNumber(m.price ?? m.current_price) ?? price ?? 0,
            location: String(m.location ?? m.city ?? 'বাংলাদেশ'),
          }))
        : [];
      return {
        id: String(p.id ?? index + 1),
        slug: slug || `product-${index + 1}`,
        name: String(name || 'পণ্য'),
        emoji: String(p.emoji ?? '🛒'),
        category: String(
          p.category_slug ?? p.categorySlug ?? p.category ?? 'onnanno',
        ),
        categoryName: String(
          p.category_bn ?? p.categoryName ?? p.category_name ?? 'অন্যান্য',
        ),
        unit: String(p.unit_bn ?? p.unitBn ?? p.unit ?? 'প্রতি কেজি'),
        price,
        change: Number.isFinite(change) ? change : 0,
        description: String(
          p.description_bn ??
            p.description ??
            'প্রয়োজনীয় পণ্যের বর্তমান বাজারদর।',
        ),
        min: finiteNumber(p.min_price ?? p.minPrice) ?? price,
        max: finiteNumber(p.max_price ?? p.maxPrice) ?? price,
        markets,
      };
    });

    // Never show fake zero prices or generic placeholder products when the API schema changes.
    const validProducts = normalized
      .filter((p: any) => p.name !== 'পণ্য' && p.price !== null && p.price > 0)
      .map((p: any) => ({
        ...p,
        price: p.price as number,
        min: p.min ?? p.price,
        max: p.max ?? p.price,
      }));
    return validProducts.length ? validProducts : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}
