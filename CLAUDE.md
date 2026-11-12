# CLAUDE.md

## Proje Hakkinda

AIAS (AI Attribution Standard) — icerik uretiminde yapay zekanin nasil ve ne olcude kullanildigini belirten bir atif beyani standardidir. teyit.org tarafindan IBM Research'un [AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io) projesi temel alinarak medya sektorune uyarlandi.

- **Canli:** https://aias.teyit.org
- **Repo:** https://github.com/teyit/AI-Attribution-Standard
- **Lisans:** Apache License 2.0 (orijinal projeyle uyumlu)

## Mimari

Tek dosyali statik HTML uygulamasi. Framework, build sureci veya npm bagimliligi yok.

```
index.html          # Tum HTML + CSS + JS (tek dosya, ~1970 satir)
lang/tr.js          # Turkce ceviri dosyasi
lang/en.js          # Ingilizce ceviri dosyasi
LICENSE             # Apache License 2.0
NOTICE              # Atif bildirimi (orijinal projeye referans)
README.md           # Proje dokumantasyonu
```

### index.html Yapisi

```
<style>        ~900 satir CSS (satir 24-925)
<body>         HTML yaklasik satir 927-1260
<script>       Ceviri dosyalari yuklenir (lang/tr.js, lang/en.js)
<script>       Ana uygulama JS'i (~700 satir, IIFE icinde)
```

## Uc Sekme (Tab)

1. **home** — Tanitim, AIAS kod formati anatomisi, neden gerekli, nasil kullanilir
2. **builder** — Adim adim atif beyani kodu olusturucu (radio button dot-slider + secenekler + onizleme)
3. **interpret** — Mevcut AIAS kodlarini cozumleyici

## CSS Konvansiyonlari

- CSS degiskenleri `:root` icinde tanimli (`--c-primary`, `--c-accent`, `--c-bg`, `--c-text`, `--font-sans`, `--font-mono`, `--ease-out`, `--ease-in-out`)
- Animasyon easing'leri icin `--ease-out` / `--ease-in-out` token'lari kullanilir; `transition:all` yazilmaz, ozellikler tek tek listelenir
- Sadece `transform` ve `opacity` animate edilir (layout tetikleyen `left`/`width` gibi ozellikler degil)
- Tum font boyutlari `rem` birimi kullanir
- Responsive breakpoint'ler: `960px` (tablet), `768px` (kucuk tablet), `600px` (mobil)
- `prefers-reduced-motion`, `prefers-reduced-transparency` ve `:focus-visible` destegi mevcut
- Sticky nav yari saydam (`backdrop-filter`), `@supports` fallback'i ile
- Sticky nav icin `-webkit-sticky` fallback'i var
- Vendor prefix'ler: `-webkit-user-select`, `-webkit-backdrop-filter`

## JavaScript Konvansiyonlari

- **Sifir disari bagimlilik** — tamamen vanilla JS
- **ES5 uyumlu** — `var` kullanilir, arrow function / template literal / optional chaining yok
- Tum JS tek bir IIFE icinde calisir (global scope kirletilmez)
- `switchTab()` window'a atanir (URL param'dan tab acma icin)
- XSS koruması: `esc()` fonksiyonu innerHTML oncesinde kullanilir
- Clipboard: `navigator.clipboard.writeText` + `document.execCommand('copy')` fallback
- localStorage: try/catch ile sarili (private browsing uyumlu)

## i18n Sistemi

- Ceviri dosyalari `window.TRANSLATIONS.tr` / `window.TRANSLATIONS.en` olarak yuklenir
- `t(key, params)` fonksiyonu ceviri arar, `{param}` placeholder'lari destekler
- Turkce varsayilan dil, fallback da Turkce
- HTML'de uc attribute kullanilir:
  - `data-i18n="key"` → `textContent` gunceller
  - `data-i18n-html="key"` → `innerHTML` gunceller (HTML iceren ceviriler icin)
  - `data-i18n-placeholder="key"` → `placeholder` gunceller
- Dil tercihi: URL param (`?lang=en`) > localStorage > varsayilan (`tr`)
- Dil degistiginde `<html lang>`, meta tag'ler, tum i18n elemanlar ve dinamik icerik guncellenir

### Yeni dil eklemek icin:

1. `lang/xx.js` olustur (tr.js veya en.js'i kopyala, cevirileri yap)
2. `index.html` icinde `<script src="lang/xx.js">` satiri ekle
3. Sistem otomatik olarak dil seciciye ekler

## AIAS Kod Yapisi

Bir AIAS kodu su formati izler: `AIAS-[surum] [oran] [asamalar] [inceleme] [modeller] | [not]`

Ornek: `AIAS-1.0 PAI ReEd R ChatGPT, Midjourney | Kapak gorseli YZ ile uretildi.`

- **Surum:** Kodun basinda, AIAS'a tireyle bitisik (`AIAS-1.0`). Guncel surum `index.html` icindeki `VERSION` sabitinde.
  Eski yazilis (`AIAS Ph Pr R ChatGPT v1.0`, surum sonda) model surumu gibi okundugu icin 2026-11'de birakildi ve artik okunmuyor.
- **Oran kodlari:** `Eh` (tamamen insan), `Ph` (cogunlukla insan), `HAb` (insan-YZ dengesi), `PAI` (cogunlukla YZ), `EAI` (tamamen YZ)
- **Asama kodlari:** `Re` (arastirma), `Pr` (uretim), `Ed` (duzenleme); ayiricisiz birlesir (`RePrEd`)
- **Inceleme kodlari:** `R` (insan tarafindan incelendi), `Nr` (incelenmedi)
- `Eh` (tamamen insan) ise asama, inceleme ve model almaz: `AIAS-1.0 Eh`
- **Modeller:** Serbest metin, virgulle ayrilir, birden cok kelime olabilir (ornegin `ChatGPT, Gemini 2.5 Pro`)
- **Not:** ` | ` ile ayrilir, istege bagli editor notu

## Erisilebirlik (a11y)

- Tab navigasyonu: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`
- Dekoratif SVG'ler `aria-hidden="true"` tasir
- Dil secici `aria-label` icerir
- Navbar'da GitHub repo linki (`aria-label` ile)
- Klavye focus: `:focus-visible` stilleri tanimli
- Hareket hassasiyeti: `prefers-reduced-motion` medya sorgusu tanimli

## Gelistirme Kurallari

- **Mumkun oldugunca az JavaScript kullan.** CSS ile cozulebilen seyleri JS'e tasima.
- JavaScript gerekliyse, performansi etkilemeyecek sekilde optimize et.
- Kodu basit ve temiz tut.
- Yeni bagimlilik ekleme — vanilla JS ve CSS ile calis.
- Turkcede karakter kodlamasi UTF-8 olmali.
- Commit mesajlari Turkce yazilir.
- Orijinal projeye (AI Attribution Toolkit) atif korunmali — NOTICE dosyasini silme veya degistirme.
