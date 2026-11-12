window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS.en = {
  _meta: { label: 'English', flag: '\ud83c\uddec\ud83c\udde7' },

  // -- Meta --
  meta_title: 'AIAS AI Attribution Standard — teyit.org',
  meta_description: 'Interpret AIAS (AI Attribution Standard) codes and create attribution statements.',
  og_title: 'AIAS Code Interpreter — teyit.org',
  og_description: 'AIAS (AI Attribution Standard) provides a detailed attribution statement standard that specifies how and to what extent AI was used in content creation.',

  // -- Nav --
  nav_brand: 'AIAS - AI Attribution Standard',
  nav_home: 'Home',
  nav_builder: 'Create Statement',
  nav_interpret: 'Interpret Statement',

  // -- Home hero --
  home_hero_title: 'Comprehensive and transparent attribution standard for AI usage',
  home_hero_desc1: 'AIAS (AI Attribution Standard) provides an attribution statement standard that specifies not just whether AI was used in content creation, but <strong>how and to what extent it was used</strong>. This approach distinguishes between different levels and types of AI contributions, strengthening content creators\' ownership and users\' trust.',
  home_hero_desc2: 'This tool is adapted for the media industry based on the <a href="https://github.com/aiattribution/aiattribution.github.io" target="_blank">AI Attribution Toolkit</a> project developed by the IBM Research team, and published as <a href="https://github.com/teyit/AI-Attribution-Standard" target="_blank">open source</a>.',
  home_btn_builder: 'Create Statement',
  home_btn_interpret: 'Interpret Code',

  // -- Home anatomy --
  home_anatomy_title: 'Attribution Statement Code Format',
  home_anatomy_desc: 'AIAS (AI Attribution Standard) summarizes every dimension of AI usage in a single standardized code.',
  anatomy_label_prefix: 'Attribution standard<br>and version number',
  anatomy_label_stages: 'At which stages<br>did AI contribute?',
  anatomy_label_models: 'AI models and<br>applications used',
  anatomy_label_note: 'Editor note<br>(optional)',
  anatomy_label_proportion: 'How much did<br>AI contribute?',
  anatomy_label_review: 'Was AI content<br>reviewed by a human?',
  anatomy_label_icons: 'Icons representing<br>the statements',
  anatomy_note_example: '| Cover image generated with AI.',

  // -- Home why --
  home_why_title: 'Why is this needed?',
  home_why_p1: 'As the use of generative AI becomes widespread, generic statements like "prepared with AI assistance" are no longer sufficient. In an article written with AI help, did the AI only fix spelling errors, or did it generate most of the ideas? Did it create the majority of the content, or only help with a few sentences? Such questions affect content creators\' sense of ownership and consumers\' trust. AIAS eliminates this ambiguity by clearly revealing the scope of AI contribution, the tools used, and the level of oversight.',
  home_why_p2: 'Our goal is to develop an open-source and detailed AI attribution method that accurately reflects content creators\' ownership and provides greater transparency for consumers to calibrate their trust. Inspired by the Creative Commons license, this attribution statement approach is based on <a href="https://dl.acm.org/doi/full/10.1145/3706598.3713522" target="_blank">research published at CHI 2025</a> addressing transparency needs in co-creation processes.',

  // -- Home how to use --
  home_howto_title: 'How to use attribution statements?',
  home_howto_desc: 'Attribution statements can be copied as text and added to your content. How you include the statement in your work depends on the content type, context, your audience\'s needs, and/or your organization\'s requirements.',
  home_feature1_title: 'Digital publications',
  home_feature1_desc: 'Attribution statement text can be added below articles, blog posts, or web content. You can link the statement to this website to make it easier for readers to interpret.',
  home_feature2_title: 'Newsletters',
  home_feature2_desc: 'Attribution statements can be added to news content sent as emails or newsletters, transparently communicating the scope of AI assistance to subscribers.',
  home_feature3_title: 'Podcasts and video content',
  home_feature3_desc: 'Attribution statements can be added to podcast descriptions or video info boxes, transparently conveying AI usage to listeners and viewers.',

  // -- Home feedback --
  home_feedback_title: 'Feedback',
  home_feedback_text: 'This tool is continuously being improved. You can share your suggestions, questions, or comments on <a href="https://github.com/teyit/AI-Attribution-Standard/issues" target="_blank">GitHub</a>.',

  // -- Interpret tab --
  interpret_title: 'Interpret an Attribution Statement',
  interpret_info: 'Enter a published AIAS code to see what it means. Example: <code style="font-family:var(--font-mono);font-size:0.85rem;background:var(--c-bg-alt);padding:2px 6px;border-radius:3px">AIAS-1.0 Ph RePr R ChatGPT</code>',
  interpret_placeholder: 'Type or paste an AIAS code, e.g.: AIAS-1.0 HAb Ed R ChatGPT, Claude',
  interpret_btn: 'Interpret',
  interpret_library_title: 'Component Library (All Codes)',
  interpret_library_info: 'All component codes used in AIAS statements and their meanings are listed below.',
  interpret_explanation: 'AIAS (AI Attribution Standard) is used to transparently declare AI usage in content creation. The attribution statement is evaluated solely based on the final published content (as presented to the reader). AI usage in non-publication materials such as research notes, draft documents, internal communications, meeting notes, briefing documents, raw data work, and similar is not included in this statement; it can optionally be recorded under a separate "non-publication AI usage" assessment.',

  // -- Builder tab --
  builder_title: 'Create Attribution Statement',
  builder_info: 'Create a standard AIAS attribution statement code by entering information about the AI usage that contributed to your content creation process.',
  builder_q1: 'How much of the final published content was created by AI?',
  builder_q2: 'At which stages did AI contribute?',
  builder_q3: 'Which AI models were used?',
  builder_q4: 'Was there human review?',
  builder_q5: 'Editor Note',
  builder_q5_optional: '(optional)',
  builder_models_placeholder: 'ChatGPT, Claude (separate with commas)',
  builder_models_hint: 'Separate multiple models with commas. (Optional)',
  builder_note_placeholder: 'Write additional explanation about AI usage here if needed',
  builder_output_title: 'Statement Output',
  builder_result_code_label: 'Generated AIAS Code',
  builder_result_embed_label: 'HTML Embed Code',
  builder_result_text_label: 'Text Expression',
  builder_result_explanation_label: 'Explanation',
  builder_embed_hint: 'Add this code to your web page to display the AIAS attribution statement to your readers.',
  builder_explanation: 'You can declare AI usage transparently by adding the AIAS code you created to your content. The code can be interpreted by anyone at <a href="https://aias.teyit.org" target="_blank" rel="noopener">aias.teyit.org</a>.',

  // -- Builder slider labels --
  slider_entirely_human: 'Entirely human',
  slider_primarily_human: 'Primarily human',
  slider_human_ai_blend: 'Human-AI blend',
  slider_primarily_ai: 'Primarily AI',
  slider_entirely_ai: 'Entirely AI',

  // -- Builder stage labels --
  stage_research_label: 'Research',
  stage_research_desc: '(source review, data analysis, fact-checking support, etc.)',
  stage_production_label: 'Production',
  stage_production_desc: '(draft writing, title/summary generation, translation, image generation, etc.)',
  stage_editing_label: 'Editing',
  stage_editing_desc: '(text editing, style and grammar correction, etc.)',

  // -- Builder review labels --
  review_yes_label: 'AI outputs were reviewed and approved by a human',
  review_no_label: 'AI outputs were not reviewed',

  // -- Data: Proportion --
  proportion_Eh_name: 'Entirely human',
  proportion_Eh_desc: 'This content was produced entirely by humans, without the use of AI.',
  proportion_Ph_name: 'Primarily human',
  proportion_Ph_desc: 'This content was produced primarily by humans.',
  proportion_HAb_name: 'Human-AI blend',
  proportion_HAb_desc: 'This content was created with a balanced mix of human and AI contributions.',
  proportion_PAI_name: 'Primarily AI',
  proportion_PAI_desc: 'This content was produced primarily by AI.',
  proportion_EAI_name: 'Entirely AI',
  proportion_EAI_desc: 'This content was produced entirely by AI.',

  // -- Data: Stages --
  stage_Re_name: 'Research',
  stage_Re_desc: 'AI was used in research processes such as source review and data analysis.',
  stage_Pr_name: 'Production',
  stage_Pr_desc: 'AI was used in production processes such as draft writing and content generation.',
  stage_Ed_name: 'Editing',
  stage_Ed_desc: 'AI was used in editing processes such as text editing and grammar correction.',

  // -- Data: Review --
  review_R_name: 'Reviewed and approved',
  review_R_desc: 'Content produced by AI has been reviewed and approved by human editor(s).',
  review_Nr_name: 'Not reviewed',
  review_Nr_desc: 'Content produced by AI has not been reviewed by a human editor.',

  // -- Parser errors --
  error_no_prefix: 'Statement must start with the AIAS prefix and the version number (e.g.: AIAS-1.0).',
  error_no_proportion: 'Proportion code is missing.',
  error_invalid_proportion: 'Invalid proportion code: "{code}". Valid codes: Eh, Ph, HAb, PAI, EAI',
  error_no_review: 'Review code is missing.',
  error_invalid_review: 'Invalid review code: "{code}". Valid codes: R, Nr',

  // -- Dynamic templates --
  models_used: 'The following models or applications were used: {models}.',
  editor_note: 'Editor note: {note}',
  copy_btn: 'Copy',
  copy_btn_done: 'Copied!',

  // -- Interpret cards --
  card_aias_name: 'AI Attribution Standard',
  card_aias_desc: 'This prefix is the standard expression used to identify an AI attribution statement.',
  card_models_name: 'Models',
  card_models_desc: 'AI models or applications used in the production of the content.',
  card_version_name: 'Version',
  card_version_desc: 'Version number of the attribution statement. This number will change as the attribution standard evolves.',

  // -- Library group titles --
  lib_proportion_title: 'AI Usage Proportion Codes',
  lib_stages_title: 'AI Contribution Stage Codes',
  lib_review_title: 'Human Review Codes',

  // -- Footer --
  footer_teyit: 'teyit.org',
  footer_aias: 'AI Attribution Standard'
};
