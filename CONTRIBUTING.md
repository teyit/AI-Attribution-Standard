# Katkı Rehberi / Contributing Guide

Bu proje, medya sektöründe yapay zeka kullanımının şeffaf bir şekilde beyan edilmesini hedefler. Tüm yayın kuruluşlarının katkısına açıktır.

This project aims to bring transparency to AI usage in media. Contributions from all news organizations are welcome.

---

## Nasıl Katkı Sağlanır / How to Contribute

### Hata Bildirimi / Bug Reports

[GitHub Issues](https://github.com/teyit/AI-Attribution-Standard/issues) sayfasından hata bildirebilirsiniz. Lütfen şunları belirtin:

- Hangi tarayıcı ve cihazda sorun oluştuğunu
- Sorunu tekrar üretme adımlarını
- Beklenen ve gerçekleşen davranışı

### Yeni Özellik Önerisi / Feature Requests

Öneri ve fikirlerinizi Issues sayfasından paylaşabilirsiniz. Büyük değişiklikler için önce bir issue açarak tartışma başlatmanızı öneririz.

### Pull Request Gönderme

1. Repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b ozellik/yeni-ozellik`)
3. Değişikliklerinizi yapın ve commit edin
4. Branch'inizi push edin (`git push origin ozellik/yeni-ozellik`)
5. GitHub üzerinden Pull Request açın

---

## Proje Yapısı / Project Structure

```
index.html          # Tüm HTML + CSS + JS (tek dosya)
lang/tr.js          # Türkçe çeviriler
lang/en.js          # İngilizce çeviriler
```

Proje statik bir HTML uygulamasıdır. Framework, build süreci veya bağımlılık yoktur. `index.html` dosyasını bir tarayıcıda açmak yeterlidir.

---

## Yeni Dil Ekleme / Adding a New Language

1. `lang/` klasöründe mevcut bir dil dosyasını kopyalayın (örn. `lang/en.js` → `lang/de.js`)
2. Tüm çeviri değerlerini yeni dile çevirin
3. `_meta.label` alanını dilin kendi adıyla güncelleyin (örn. `Deutsch`)
4. `index.html` içinde diğer `<script src="lang/...">` satırlarının yanına yeni dosyayı ekleyin

Sistem yeni dili otomatik olarak dil seçiciye ekler.

---

## Kod Kuralları / Code Guidelines

- **Mümkün olduğunca az JavaScript kullanın.** CSS ile çözülebilen şeyleri JS'e taşımayın.
- JavaScript gerekiyorsa ES5 uyumlu yazın (`var` kullanın, arrow function / template literal kullanmayın).
- Tüm font boyutlarında `rem` birimi kullanın.
- Yeni bağımlılık eklemeyin — vanilla JS ve CSS ile çalışın.
- HTML içinde `data-i18n` / `data-i18n-html` / `data-i18n-placeholder` attribute'larıyla i18n desteği sağlayın; metinleri doğrudan HTML'e yazmayın.
- XSS koruması için `innerHTML` kullanmadan önce `esc()` fonksiyonuyla escape edin.

---

## Lisans / License

Katkılarınız [Apache License 2.0](LICENSE) kapsamında lisanslanır. Bu proje IBM Research'ün [AI Attribution Toolkit](https://github.com/aiattribution/aiattribution.github.io) projesi temel alınarak geliştirilmiştir.
