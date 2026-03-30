window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS.tr = {
  _meta: { label: 'Türkçe' },

  // -- Meta --
  meta_title: 'AIAS Yapay Zeka Atıf Standardı — teyit.org',
  meta_description: 'AIAS (Yapay Zeka Atıf Standardı) kodlarını yorumlayın, atıf beyanı oluşturun.',
  og_title: 'AIAS Kod Açıklama Aracı — teyit.org',
  og_description: 'AIAS (Yapay Zeka Atıf Standardı), içerik üretiminde yapay zekanın nasıl ve ne ölçüde kullanıldığını belirten bir atıf beyanı standardı sunar.',

  // -- Nav --
  nav_brand: 'AIAS - Yapay Zeka Atıf Standardı',
  nav_home: 'Anasayfa',
  nav_builder: 'Atıf Beyanı Oluştur',
  nav_interpret: 'Kodu Yorumla',

  // -- Home hero --
  home_hero_title: 'Yapay zeka kullanımında detaylı ve şeffaf atıf beyanı standardı',
  home_hero_desc1: 'AIAS (Yapay Zeka Atıf Standardı), içerik üretiminde yapay zekanın yalnızca kullanılıp kullanılmadığını değil, <strong>nasıl ve ne ölçüde kullanıldığını</strong> belirten bir atıf beyanı standardı sunar. Bu yaklaşım, farklı düzey ve türdeki YZ katkılarını birbirinden ayırarak içerik üreticilerinin sahipliğini ve kullanıcıların güvenini güçlendirir.',
  home_hero_desc2: 'Bu araç, IBM Research ekibinin geliştirdiği açık kaynaklı <a href="https://github.com/aiattribution/aiattribution.github.io" target="_blank">AI Attribution Toolkit</a> projesini temel alarak medya sektörü için uyarlanmıştır.',
  home_btn_builder: 'Atıf Beyanı Oluştur',
  home_btn_interpret: 'Kodu Yorumla',

  // -- Home anatomy --
  home_anatomy_title: 'Atıf Beyanı Kod Formatı',
  home_anatomy_desc: 'AIAS (Yapay Zeka Atıf Standardı), yapay zeka kullanımının her boyutunu tek bir standart kod ile özetler.',
  anatomy_label_prefix: 'Atıf standardı<br>anahtar kodu',
  anatomy_label_stages: 'YZ hangi<br>aşamada katkı sağladı?',
  anatomy_label_models: 'Kullanılan YZ<br>modelleri ve uygulamaları',
  anatomy_label_note: 'Editör notu<br>(opsiyonel)',
  anatomy_label_proportion: 'YZ ne kadar<br>katkı sağladı?',
  anatomy_label_review: 'İnsan<br>denetimi var mı?',
  anatomy_label_version: 'Standart<br>sürüm numarası',
  anatomy_label_icons: 'İfadelere karşılık<br>gelen ikonlar',
  anatomy_note_example: '| Kapak görseli YZ ile üretildi.',

  // -- Home why --
  home_why_title: 'Buna neden ihtiyaç var?',
  home_why_p1: 'Üretken yapay zekanın kullanımı yaygınlaştıkça, "YZ desteğiyle hazırlanmıştır" gibi genel ifadeler artık yeterli olmamaya başladı. YZ yardımı ile yazılan bir makalede YZ yalnızca imla hatalarını mı düzeltti, yoksa fikirlerin çoğunu mu üretti? İçeriğin büyük bölümünü mü oluşturdu, yoksa yalnızca birkaç cümleye mi yardım etti? Bu tür sorular, içerik üreticilerinin sahiplik algısını ve tüketicilerin güvenini etkiler. AIAS, bu belirsizliği ortadan kaldırarak YZ katkısının kapsamını, kullanılan araçları ve denetim düzeyini açıkça ortaya koyar.',
  home_why_p2: 'Amacımız, içerik üreticilerinin sahiplik algısını doğru yansıtan ve tüketicilere güvenlerini kalibre etmek için daha fazla şeffaflık sunan, açık kaynaklı ve detaylı bir YZ atıf yöntemi geliştirmektir. Creative Commons lisansından ilham alınarak tasarlanan bu atıf beyanı yaklaşımı, kullanıcıların ortak üretim süreçlerindeki şeffaflık ihtiyaçlarına yönelik <a href="https://dl.acm.org/doi/full/10.1145/3706598.3713522" target="_blank">CHI 2025\'te yayımlanan araştırmaya</a> dayanmaktadır.',

  // -- Home how to use --
  home_howto_title: 'Atıf beyanı nasıl kullanılır?',
  home_howto_desc: 'Atıf beyanları metin olarak kopyalanabilir ve içeriğinize eklenebilir. Beyanı çalışmanıza nasıl dahil edeceğiniz; içerik türüne, bağlamına, hedef kitlenizin ihtiyaçlarına ve/veya kurumunuzun gereksinimlerine bağlıdır.',
  home_feature1_title: 'Dijital yayınlar',
  home_feature1_desc: 'Makale, blog yazısı veya web içeriklerinin altına atıf beyanı metni eklenebilir. Beyanı bu web sitesine bağlayarak okuyucuların yorumlamasını kolaylaştırabilirsiniz.',
  home_feature2_title: 'Haber bültenleri',
  home_feature2_desc: 'E-posta veya bülten olarak gönderilen haber içeriklerinde atıf beyanı eklenerek YZ desteğinin kapsamı abonelere şeffaf biçimde iletilebilir.',
  home_feature3_title: 'Podcast ve video içerikler',
  home_feature3_desc: 'Podcast açıklamalarına veya video içeriklerin bilgi kutusuna atıf beyanı eklenerek YZ kullanımı dinleyici ve izleyicilere şeffaf biçimde aktarılabilir.',

  // -- Home feedback --
  home_feedback_title: 'Geri bildirim',
  home_feedback_text: 'Bu araç sürekli geliştirilmektedir. Öneri, soru veya yorumlarınızı <a href="https://github.com/teyit/AI-Attribution-Standard/issues" target="_blank">GitHub</a> üzerinden paylaşabilirsiniz.',

  // -- Interpret tab --
  interpret_title: 'AIAS Kodu Girerek Anlamını Göster',
  interpret_info: 'Yayınlanmış bir AIAS kodu girerek ne anlama geldiğini görüntüleyin. Örnek: <code style="font-family:var(--font-mono);font-size:0.85rem;background:var(--c-bg-alt);padding:2px 6px;border-radius:3px">AIAS Ph RePr R ChatGPT v1.0</code>',
  interpret_placeholder: 'Örn: AIAS HAb Ed R ChatGPT, Claude v1.0',
  interpret_btn: 'Anlamını Göster',
  interpret_library_title: 'Bileşen Kütüphanesi (Tüm Kodlar)',
  interpret_library_info: 'AIAS beyanlarında kullanılan tüm bileşen kodları ve anlamları aşağıda listelenmiştir.',
  interpret_explanation: 'AIAS (Yapay Zeka Atıf Standardı), içerik üretiminde yapay zeka kullanımını şeffaf şekilde beyan etmek için kullanılır. Atıf beyanı, yalnızca yayımlanan nihai içerik (okuyucuya sunulan son şekli üzerinden) değerlendirilerek yapılır. Araştırma notları, taslak dokümanlar, iç yazışmalar, toplantı notları, briefing dokümanları, ham veri çalışmaları ve benzeri yayın dışı üretimlerdeki yapay zeka kullanımı bu beyana dahil edilmez; opsiyonel olarak ayrı bir "yayın dışı yapay zeka kullanımı" değerlendirmesi altında kaydedilebilir.',

  // -- Builder tab --
  builder_title: 'Atıf Beyanı Oluştur',
  builder_info: 'İçerik oluşturma sürecinize katkı sağlayan yapay zeka kullanım bilgilerinizi girerek standart bir AIAS atıf beyanı kodu oluşturun.',
  builder_q1: 'Yayımlanan nihai içeriğin ne kadarı yapay zeka tarafından oluşturuldu?',
  builder_q2: 'Yapay zeka hangi aşamalarda katkı sağladı?',
  builder_q3: 'Hangi yapay zeka modelleri kullanıldı?',
  builder_q4: 'İnsan denetimi var mı?',
  builder_q5: 'Editör Notu',
  builder_q5_optional: '(opsiyonel)',
  builder_models_placeholder: 'ChatGPT, Claude (virgülle ayırın)',
  builder_models_hint: 'Birden fazla model varsa virgülle ayırın. (Opsiyonel)',
  builder_note_placeholder: 'AI kullanımına dair ek açıklama gerekiyorsa buraya yazın',
  builder_output_title: 'Beyan Çıktısı',
  builder_result_code_label: 'Oluşturulan AIAS Kodu',
  builder_result_embed_label: 'HTML Yerleştirme Kodu',
  builder_result_text_label: 'Metin İfadesi',
  builder_result_explanation_label: 'Açıklama',
  builder_embed_hint: 'Bu kodu web sayfanıza ekleyerek AIAS atıf beyanınızı okuyuculara gösterebilirsiniz.',
  builder_explanation: 'Oluşturduğunuz AIAS kodunu içeriğinize ekleyerek yapay zeka kullanımını şeffaf şekilde beyan edebilirsiniz. Kod, <a href="https://aias.teyit.org" target="_blank" rel="noopener">aias.teyit.org</a> üzerinden herkes tarafından yorumlanabilir.',

  // -- Builder slider labels --
  slider_entirely_human: 'Tamamen insan',
  slider_primarily_human: 'Büyük ölçüde insan',
  slider_human_ai_blend: 'İnsan-Yapay zeka hibrit',
  slider_primarily_ai: 'Büyük ölçüde yapay zeka',
  slider_entirely_ai: 'Tamamen yapay zeka',

  // -- Builder stage labels --
  stage_research_label: 'Araştırma',
  stage_research_desc: '(kaynak tarama, veri analizi, doğrulama desteği, vb.)',
  stage_production_label: 'Üretim',
  stage_production_desc: '(taslak yazımı, başlık/özet üretimi, çeviri, görsel üretimi, vb.)',
  stage_editing_label: 'Düzenleme',
  stage_editing_desc: '(metin redaksiyonu, stil ve dilbilgisi düzeltme, vb.)',

  // -- Builder review labels --
  review_yes_label: 'Yapay zeka çıktıları editör tarafından incelendi ve onaylandı',
  review_no_label: 'Yapay zeka çıktıları incelenmedi',

  // -- Data: Proportion --
  proportion_Eh_name: 'Tamamen insan',
  proportion_Eh_desc: 'Bu içerik tamamen insan tarafından, yapay zeka kullanılmadan üretilmiştir.',
  proportion_Ph_name: 'Büyük ölçüde insan',
  proportion_Ph_desc: 'Bu içerik büyük ölçüde insan tarafından üretilmiştir.',
  proportion_HAb_name: 'İnsan-Yapay zeka hibrit',
  proportion_HAb_desc: 'Bu içerik, insan ve yapay zeka katkılarının dengeli bir karışımıyla oluşturulmuştur.',
  proportion_PAI_name: 'Büyük ölçüde yapay zeka',
  proportion_PAI_desc: 'Bu içerik büyük ölçüde yapay zeka tarafından üretilmiştir.',
  proportion_EAI_name: 'Tamamen yapay zeka',
  proportion_EAI_desc: 'Bu içerik tamamen yapay zeka tarafından üretilmiştir.',

  // -- Data: Stages --
  stage_Re_name: 'Araştırma',
  stage_Re_desc: 'Yapay zeka, kaynak tarama ve veri analizi gibi araştırma süreçlerinde kullanılmıştır.',
  stage_Pr_name: 'Üretim',
  stage_Pr_desc: 'Yapay zeka, taslak yazımı ve içerik üretimi gibi üretim süreçlerinde kullanılmıştır.',
  stage_Ed_name: 'Düzenleme',
  stage_Ed_desc: 'Yapay zeka, metin redaksiyonu ve dilbilgisi düzeltme gibi düzenleme süreçlerinde kullanılmıştır.',

  // -- Data: Review --
  review_R_name: 'İncelendi ve onaylandı',
  review_R_desc: 'Yapay zeka tarafından üretilen içerik editör(ler) tarafından incelenmiş ve onaylanmıştır.',
  review_Nr_name: 'İncelenmedi',
  review_Nr_desc: 'Yapay zeka tarafından üretilen içerik editör tarafından incelenmemiştir.',

  // -- Parser errors --
  error_no_prefix: 'Beyan "AIAS" ön eki ile başlamalıdır.',
  error_no_version: 'Beyan sürüm numarası (örn: v1.0) ile bitmelidir.',
  error_no_proportion: 'Oran kodu eksik.',
  error_invalid_proportion: 'Geçersiz oran kodu: "{code}". Geçerli kodlar: Eh, Ph, HAb, PAI, EAI',
  error_no_review: 'İnceleme kodu eksik.',
  error_invalid_review: 'Geçersiz inceleme kodu: "{code}". Geçerli kodlar: R, Nr',

  // -- Dynamic templates --
  models_used: 'Şu model veya uygulamalar kullanılmıştır: {models}.',
  editor_note: 'Editör notu: {note}',
  copy_btn: 'Kopyala',
  copy_btn_done: 'Kopyalandı!',

  // -- Interpret cards --
  card_aias_name: 'Yapay Zeka Atıf Standardı',
  card_aias_desc: 'Bu ön ek, bir yapay zeka atıf beyanını tanımlamak için kullanılan standart ifadedir.',
  card_models_name: 'Modeller',
  card_models_desc: 'İçeriğin üretiminde kullanılan yapay zeka modelleri veya uygulamaları.',
  card_version_name: 'Sürüm',
  card_version_desc: 'Atıf beyanının sürüm numarası. Bu numara, atıf standardı geliştikçe değişecektir.',

  // -- Library group titles --
  lib_proportion_title: 'Yapay Zeka Kullanım Oranı Kodları',
  lib_stages_title: 'Yapay Zeka Kullanılan Aşamaların Kodları',
  lib_review_title: 'İnsan Denetimi Kodları',

  // -- Footer --
  footer_teyit: 'teyit.org',
  footer_aias: 'AI Attribution Standard'
};
