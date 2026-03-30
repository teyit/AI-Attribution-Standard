# AIAS — Yapay Zeka Atıf Standardı

AIAS (AI Attribution Standard), içerik üretiminde yapay zekanın yalnızca kullanılıp kullanılmadığını değil, **nasıl ve ne ölçüde kullanıldığını** belirten bir atıf beyanı standardıdır.

"YZ desteğiyle hazırlanmıştır" gibi genel ifadeler yerine, yapay zekanın hangi aşamalarda, ne oranda ve hangi araçlarla katkı sağladığını standart bir kodla ifade eder.

**Canlı uygulama:** [aias.teyit.org](https://aias.teyit.org)

## Özellikler

- **Atıf Beyanı Oluşturucu** — Adım adım YZ kullanım beyanı kodu üretin
- **Kod Yorumlayıcı** — Mevcut AIAS kodlarını analiz edin ve anlamlarını görün
- **Çoklu dil desteği** — Türkçe ve İngilizce arayüz
- **Tek dosya, sıfır bağımlılık** — Framework veya build süreci gerektirmez
- **Duyarlı tasarım** — Masaüstü, tablet ve mobil cihazlarda çalışır
- **Erişilebilirlik** — ARIA desteği, klavye navigasyonu, azaltılmış hareket tercihi

## Kullanım

Statik bir HTML uygulamasıdır. Herhangi bir kurulum veya build adımı gerektirmez:

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/teyit/AI-Attribution-Standard.git
   ```
2. `index.html` dosyasını bir tarayıcıda açın veya herhangi bir statik sunucuyla yayınlayın.

## AIAS Kod Formatı

Bir AIAS atıf beyanı kodu şu boyutları tek bir standart kodda özetler:

| Boyut | Açıklama |
|-------|----------|
| Oran | YZ'nin içeriğe katkı oranı (tamamen insan — tamamen YZ) |
| Aşamalar | YZ'nin katkı sağladığı üretim aşamaları (araştırma, üretim, düzenleme) |
| İnceleme | İnsan tarafından gözden geçirilme durumu |
| Modeller | Kullanılan YZ araç ve modelleri |
| Not | Editör notu (isteğe bağlı) |

## Kaynak ve Atıf

Bu proje, IBM Research ekibinin geliştirdiği açık kaynaklı **[AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io)** projesini temel almaktadır. Orijinal araştırma, [CHI 2025](https://dl.acm.org/doi/full/10.1145/3706598.3713522) konferansında yayınlanmıştır.

teyit.org olarak bu araç setini medya sektörünün ihtiyaçlarına göre uyarlayarak Türkçe ve İngilizce dillerinde kullanıma sunduk.

## Katkı Sağlama

Bu proje, tüm yayın kuruluşlarının katkısına açıktır. Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakınız.

Hata bildirimleri ve öneriler için [Issues](https://github.com/teyit/AI-Attribution-Standard/issues) sayfasını kullanabilirsiniz.

## Lisans

Bu proje [Apache License 2.0](LICENSE) ile lisanslanmıştır.

Orijinal proje ([AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io)) de Apache License 2.0 ile lisanslanmıştır. Atıf bilgileri için [NOTICE](NOTICE) dosyasına bakınız.

---

## English

### AIAS — AI Attribution Standard

AIAS (AI Attribution Standard) specifies not just whether AI was used in content creation, but **how and to what extent it was used**.

Instead of vague statements like "prepared with AI assistance", AIAS expresses the stages, proportion, and tools of AI contribution in a standardized code.

**Live:** [aias.teyit.org](https://aias.teyit.org)

### Features

- **Statement Builder** — Create AI attribution codes step by step
- **Code Interpreter** — Analyze existing AIAS codes and see what they mean
- **Multilingual** — Turkish and English interface
- **Zero dependencies** — No framework or build process required
- **Responsive** — Works on desktop, tablet, and mobile
- **Accessible** — ARIA support, keyboard navigation, reduced motion preference

### Getting Started

Static HTML application. No installation or build step needed:

```bash
git clone https://github.com/teyit/AI-Attribution-Standard.git
```

Open `index.html` in a browser or serve with any static file server.

### Contributing

Contributions from all news organizations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Attribution

Based on the open-source [AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io) by IBM Research, published at [CHI 2025](https://dl.acm.org/doi/full/10.1145/3706598.3713522). Adapted for the media industry by [teyit.org](https://teyit.org).

### License

[Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for attribution details.
