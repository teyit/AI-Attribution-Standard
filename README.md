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

Bu proje, tüm yayın kuruluşlarının kullanımına ve katkısına açıktır. Katkıda bulunmak için:

1. Repoyu fork edin
2. Değişikliklerinizi yapın
3. Pull request gönderin

Hata bildirimleri ve öneriler için [Issues](https://github.com/teyit/AI-Attribution-Standard/issues) sayfasını kullanabilirsiniz.

## Lisans

Bu proje [Apache License 2.0](LICENSE) ile lisanslanmıştır.

Orijinal proje ([AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io)) de Apache License 2.0 ile lisanslanmıştır. Atıf bilgileri için [NOTICE](NOTICE) dosyasına bakınız.
