const map = require('lodash/map');

const blogsRedirection = [
  {
    old_url: '/blogs/play/seven-group-games-for-the-elderly-to-play',
    new_url: '/blogs/busy/seven-group-games-for-the-elderly-to-play',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-to-practice-self-care-to-lead-a-healthy-and-happy-life',
    new_url: '/blogs/health/how-to-practice-self-care-to-lead-a-healthy-and-happy-life',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/what-are-the-best-activities-for-senior-citizens-to-stay-healthy',
    new_url: '/blogs/fitness/what-are-the-best-activities-for-senior-citizens-to-stay-healthy',
    permanent: true,
  },
  {
    old_url: '/blogs/health/best-natural-home-remedies-for-itchy-skin-due-to-diabetes',
    new_url: '/blogs/Nutrition/best-natural-home-remedies-for-itchy-skin-due-to-diabetes',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/skin-problems-in-elderly-people/:path*',
    new_url: '/blogs/health/skin-problems-in-elderly-people',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/effective-home-remedies-for-skin-tightening',
    new_url: '/blogs/Health/effective-home-remedies-for-skin-tightening',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/excellent-skin-benefits-of-alpha-hydroxy-acid',
    new_url: '/blogs/Health/excellent-skin-benefits-of-alpha-hydroxy-acid',
    permanent: true,
  },
  {
    old_url: '/blogs/haircare/how-to-get-mirror-shiny-hair-in-30-minutes',
    new_url: '/blogs/health/how-to-get-mirror-shiny-hair-in-30-minutes',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/regenerating-the-ageing-process-decreasing-hair-thinning',
    new_url: '/blogs/busy/regenerating-the-ageing-process-decreasing-hair-thinning',
    permanent: true,
  },
  {
    old_url: '/blogs/haircare/how-to-repair-damaged-hair-with-effective-hair-repair-treatment',
    new_url: '/blogs/health/how-to-repair-damaged-hair-with-effective-hair-repair-treatment',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/best-facial-hair-removal-ideas-for-elder-women',
    new_url: '/blogs/busy/best-facial-hair-removal-ideas-for-elder-women',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/best-travel-destinations-in-india-for-seniors',
    new_url: '/blogs/conveniencel/best-travel-destinations-in-india-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/haircare/foods-for-healthy-hair-growth',
    new_url: '/blogs/health/foods-for-healthy-hair-growth',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/7-back-exercises-for-a-healthy-life',
    new_url: '/blogs/health/7-back-exercises-for-a-healthy-life',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/exercises-to-boost-your-immune-system',
    new_url: '/blogs/health/exercises-to-boost-your-immune-system',
    permanent: true,
  },
  {
    old_url: '/blogs/health/essential-advice-for-healthy-positive-ageing',
    new_url: '/blogs/busy/essential-advice-for-healthy-positive-ageing',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/ageing-gracefully-learn-the-mantra',
    new_url: '/blogs/busy/ageing-gracefully-learn-the-mantra',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/top-14-senior-friendly-travel-groups-for-memorable-travel-experiences',
    new_url: '/blogs/convenience/top-14-senior-friendly-travel-groups-for-memorable-travel-experiences',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/discover-places-with-confidence-a-travel-guide',
    new_url: '/blogs/convenience/discover-places-with-confidence-a-travel-guide',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/tips-for-seniors-to-take-care-of-their-health-at-home',
    new_url: '/blogs/busy/tips-for-seniors-to-take-care-of-their-health-at-home',
    permanent: true,
  },
  {
    old_url: '/blogs/health/5-symptoms-of-piles-in-females',
    new_url: '/blogs/convenience/5-symptoms-of-piles-in-females',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/10-ways-to-successful-group-camping-experience',
    new_url: '/blogs/convenience/10-ways-to-successful-group-camping-experience',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/nursing-homes-for-senior-parents-advantages-and-disadvantages',
    new_url: '/blogs/convenience/nursing-homes-for-senior-parents-advantages-and-disadvantages',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/food-for-healthy-skin',
    new_url: '/blogs/health/food-for-healthy-skin',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/face-skin-problems-in-growing-age',
    new_url: '/blogs/health/face-skin-problems-in-growing-age',
    permanent: true,
  },
  {
    old_url: '/blogs/play/ideal-indoor-activities-for-seniors-to-reduce-stress',
    new_url: '/blogs/health/ideal-indoor-activities-for-seniors-to-reduce-stress',
    permanent: true,
  },
  {
    old_url: '/blogs/play/learning-piano-a-beneficial-and-fun-activity-for-seniors',
    new_url: '/blogs/busy/learning-piano-a-beneficial-and-fun-activity-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/10-amazing-travel-destinations-in-thimphu-bhutan',
    new_url: '/blogs/convenience/10-amazing-travel-destinations-in-thimphu-bhutan',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/have-soul-calming-encounters-in-kerala',
    new_url: '/blogs/convenience/have-soul-calming-encounters-in-kerala',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/best-places-to-visit-in-pondicherry',
    new_url: '/blogs/convenience/best-places-to-visit-in-pondicherry',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/13-best-tourist-places-in-and-around-srinagar-kashmir',
    new_url: '/blogs/convenience/13-best-tourist-places-in-and-around-srinagar-kashmir',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/retired-want-to-travel-post-covid-we-will-take-you-place',
    new_url: '/blogs/convenience/retired-want-to-travel-post-covid-we-will-take-you-place',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/incredible-ways-to-increase-the-value-of-seniors-in-society',
    new_url: '/blogs/busy/incredible-ways-to-increase-the-value-of-seniors-in-society',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/12-tips-to-volunteer-and-talk-to-elderly-people',
    new_url: '/blogs/busy/12-tips-to-volunteer-and-talk-to-elderly-people',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/9-fun-activities-for-seniors-with-limited-mobility',
    new_url: '/blogs/busy/9-fun-activities-for-seniors-with-limited-mobility',
    permanent: true,
  },
  {
    old_url: '/blogs/play/selfcare-activities-for-seniors',
    new_url: '/blogs/busy/selfcare-activities-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/know-about-methods-to-reduce-anxiety-mild-depression-stress',
    new_url: '/blogs/busy/know-about-methods-to-reduce-anxiety-mild-depression-stress',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/extraordinary-benefits-of-drinking-hot-water-in-senior-years',
    new_url: '/blogs/busy/extraordinary-benefits-of-drinking-hot-water-in-senior-years',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/sleep-hygiene-importance-and-how-to-achieve-it',
    new_url: '/blogs/busy/sleep-hygiene-importance-and-how-to-achieve-it',
    permanent: true,
  },
  {
    old_url: '/blogs/play/games-for-elderly',
    new_url: '/blogs/busy/games-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/play/what-are-the-benefits-of-playing-video-games-for-seniors',
    new_url: '/blogs/busy/what-are-the-benefits-of-playing-video-games-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/play/seven-group-games-for-the-elderly-to-play',
    new_url: '/blogs/busy/seven-group-games-for-the-elderly-to-play',
    permanent: true,
  },
  {
    old_url: '/blogs/play/top-15-hobby-ideas-for-seniors',
    new_url: '/blogs/busy/top-15-hobby-ideas-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/play/5-easy-card-games-for-your-elders',
    new_url: '/blogs/busy/5-easy-card-games-for-your-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/play/7-benefits-and-11-ideas-for-indoor-games-for-seniors',
    new_url: '/blogs/busy/7-benefits-and-11-ideas-for-indoor-games-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/as-memory-weakens-take-measures-to-fight-memory-loss',
    new_url: '/blogs/busy/as-memory-weakens-take-measures-to-fight-memory-loss',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/everything-about-stress-and-tips-for-seniors-to-overcome-stress',
    new_url: '/blogs/health/everything-about-stress-and-tips-for-seniors-to-overcome-stress',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/benefits-of-home-gardening-for-the-elderly',
    new_url: '/blogs/busy/benefits-of-home-gardening-for-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/festival/diwali-gift-ideas',
    new_url: '/blogs/busy/diwali-gift-ideas',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/give-a-touch-of-royalty-elegant-home-decor-gifts-for-diwali',
    new_url: '/blogs/busy/give-a-touch-of-royalty-elegant-home-decor-gifts-for-diwali',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/unique-ideas-to-light-up-your-home-with-these-diy-decor-ideas-this-diwali',
    new_url: '/blogs/busy/unique-ideas-to-light-up-your-home-with-these-diy-decor-ideas-this-diwali',
    permanent: true,
  },
  {
    old_url: '/blogs/play/16-indoor-activities-for-seniors-during-lockdown',
    new_url: '/blogs/convenience/16-indoor-activities-for-seniors-during-lockdown',
    permanent: true,
  },
  {
    old_url: '/blogs/play/activities-for-seniors',
    new_url: '/blogs/busy/activities-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/play/recreational-activities-for-the-elderly',
    new_url: '/blogs/busy/recreational-activities-for-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/12-super-comfy-diwali-outfits-for-elders',
    new_url: '/blogs/busy/12-super-comfy-diwali-outfits-for-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-to-relieve-stress-in-10-simple-ways',
    new_url: '/blogs/health/how-to-relieve-stress-in-10-simple-ways',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/5-brain-exercises-to-reduce-stress-and-depression',
    new_url: '/blogs/health/5-brain-exercises-to-reduce-stress-and-depression',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/10-sugar-free-sweets-to-enjoy-a-guilt-free-diwali',
    new_url: '/blogs/busy/10-sugar-free-sweets-to-enjoy-a-guilt-free-diwali',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/caregivers-can-support-structured-physical-therapy-exercises',
    new_url: '/blogs/fitness/caregivers-can-support-structured-physical-therapy-exercises',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-does-music-therapy-help-memory-disorder-patients',
    new_url: '/blogs/busy/how-does-music-therapy-help-memory-disorder-patients',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/why-is-a-self-care-plan-necessary',
    new_url: '/blogs/busy/why-is-a-self-care-plan-necessary',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/objective-methods-of-creating-a-self-care-roadmap',
    new_url: '/blogs/health/objective-methods-of-creating-a-self-care-roadmap',
    permanent: true,
  },
  {
    old_url: '/blogs/health/regular-exercise-is-the-key-to-good-senior-mental-health',
    new_url: '/blogs/fitness/regular-exercise-is-the-key-to-good-senior-mental-health',
    permanent: true,
  },
  {
    old_url: '/blogs/health/6-ways-to-take-care-of-your-mental-health',
    new_url: '/blogs/busy/6-ways-to-take-care-of-your-mental-health',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/mental-health-tips-for-everyone-to-do-well-in-life',
    new_url: '/blogs/busy/mental-health-tips-for-everyone-to-do-well-in-life',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/learn-stress-management-an-efficient-skill-to-live-peacefully',
    new_url: '/blogs/busy/learn-stress-management-an-efficient-skill-to-live-peacefully',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/easy-steps-to-develop-a-self-care-plan',
    new_url: '/blogs/busy/easy-steps-to-develop-a-self-care-plan',
    permanent: true,
  },
  {
    old_url: '/blogs/play/fun-activities-for-seniors',
    new_url: '/blogs/busy/fun-activities-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/mediclaim-policy-for-senior-citizens-in-2022',
    new_url: '/blogs/convenience/mediclaim-policy-for-senior-citizens-in-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/what-are-some-issues-of-middle-class-senior-citizens-in-india',
    new_url: '/blogs/busy/what-are-some-issues-of-middle-class-senior-citizens-in-india',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/how-are-the-old-age-homes-for-seniors-in-india',
    new_url: '/blogs/busy/how-are-the-old-age-homes-for-seniors-in-india',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/managing-caregiver-stress-is-difficult-but-essential-for-optimum-caregiving',
    new_url: '/blogs/health/managing-caregiver-stress-is-difficult-but-essential-for-optimum-caregiving',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/what-is-the-significance-of-chaitra-navratri-and-sharad-navratri',
    new_url: '/blogs/busy/what-is-the-significance-of-chaitra-navratri-and-sharad-navratri',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/navratri-2022-dates-and-durga-puja-muhurat',
    new_url: '/blogs/busy/navratri-2022-dates-and-durga-puja-muhurat',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/all-about-9-avatars-of-durga-and-9-colours-to-wear-this-festive-week',
    new_url: '/blogs/busy/all-about-9-avatars-of-durga-and-9-colours-to-wear-this-festive-week',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/everything-about-navratri',
    new_url: '/blogs/busy/everything-about-navratri',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/top-8-home-safety-tips-for-seniors',
    new_url: '/blogs/busy/top-8-home-safety-tips-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/why-every-senior-should-visit-kanyakumari-once-in-a-lifetime',
    new_url: '/blogs/convenience/why-every-senior-should-visit-kanyakumari-once-in-a-lifetime',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/explore-kalkaji-mandir',
    new_url: '/blogs/convenience/explore-kalkaji-mandir',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/kalkaji-mandir',
    new_url: '/blogs/busy/kalkaji-mandir',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/understanding-the-benefits-of-playing-golf-for-seniors',
    new_url: '/blogs/busy/understanding-the-benefits-of-playing-golf-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/kalkaji-mandir-history-and-architecture',
    new_url: '/blogs/busy/kalkaji-mandir-history-and-architecture',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/lakshmi-ji-ki-aarti-meaning-and-benefits',
    new_url: '/blogs/busy/lakshmi-ji-ki-aarti-meaning-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/6-different-ways-for-a-healthy-immunity-system',
    new_url: '/blogs/health/6-different-ways-for-a-healthy-immunity-system',
    permanent: true,
  },
  {
    old_url: '/blogs/health/best-yoga-for-thyroid',
    new_url: '/blogs/fitness/best-yoga-for-thyroid',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/can-throat-clearing-signify-dementia-learn-more-to-stay-cautious',
    new_url: '/blogs/health/can-throat-clearing-signify-dementia-learn-more-to-stay-cautious',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/dancing-is-the-best-full-body-workout',
    new_url: '/blogs/busy/dancing-is-the-best-full-body-workout',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/benefits-of-zumba-for-your-health-and-fitness-goals',
    new_url: '/blogs/fitness/benefits-of-zumba-for-your-health-and-fitness-goals',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/varieties-of-zumba-classes-and-benefits',
    new_url: '/blogs/fitness/varieties-of-zumba-classes-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/explore-the-route-to-achieve-balance-and-wellness-with-dance',
    new_url: '/blogs/busy/explore-the-route-to-achieve-balance-and-wellness-with-dance',
    permanent: true,
  },
  {
    old_url: '/blogs/health/learn-about-the-significance-of-vitamin-d-for-seniors',
    new_url: '/blogs/busy/learn-about-the-significance-of-vitamin-d-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/required-vitamins-and-minerals-for-our-body',
    new_url: '/blogs/nutrition/required-vitamins-and-minerals-for-our-body',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/take-better-control-of-your-emotions-with-exercises',
    new_url: '/blogs/busy/take-better-control-of-your-emotions-with-exercises',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/a-close-look-at-the-emotions-of-elders',
    new_url: '/blogs/busy/a-close-look-at-the-emotions-of-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/the-guide-to-benefits-of-exercise-for-immunity',
    new_url: '/blogs/fitness/the-guide-to-benefits-of-exercise-for-immunity',
    permanent: true,
  },
  {
    old_url: '/blogs/health/knee-pain-home-remedies-topical-treatments-food-supplements-and-therapies',
    new_url: '/blogs/busy/knee-pain-home-remedies-topical-treatments-food-supplements-and-therapies',
    permanent: true,
  },
  {
    old_url: '/blogs/health/emoha-doctor-talk-conversation-dr-anurag-kehar-back-pain',
    new_url: '/blogs/busy/emoha-doctor-talk-conversation-dr-anurag-kehar-back-pain',
    permanent: true,
  },
  {
    old_url: '/blogs/technology/internet-safety-rules-for-seniors-to-stay-protected-against-cyber-threats',
    new_url: '/blogs/convenience/internet-safety-rules-for-seniors-to-stay-protected-against-cyber-threats',
    permanent: true,
  },
  {
    old_url: '/blogs/technology/cybersecurity-tips-for-the-elderly',
    new_url: '/blogs/safety/cybersecurity-tips-for-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/know-everything-about-the-key-to-good-health-sleep',
    new_url: '/blogs/busy/know-everything-about-the-key-to-good-health-sleep',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/best-tips-to-help-seniors-get-sound-sleep-at-night',
    new_url: '/blogs/busy/best-tips-to-help-seniors-get-sound-sleep-at-night',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/why-is-a-good-sleep-routine-important-for-seniors',
    new_url: '/blogs/health/why-is-a-good-sleep-routine-important-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/three-benefits-seniors-receive-giving-back',
    new_url: '/blogs/busy/three-benefits-seniors-receive-giving-back',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/how-does-expressed-emotion-affect-a-patients-recovery',
    new_url: '/blogs/busy/how-does-expressed-emotion-affect-a-patients-recovery',
    permanent: true,
  },
  {
    old_url: '/blogs/health/7-beginner-yoga-for-adults',
    new_url: '/blogs/fitness/7-beginner-yoga-for-adults',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/25-best-monsoon-holiday-destinations-in-india',
    new_url: '/blogs/convenience/25-best-monsoon-holiday-destinations-in-india',
    permanent: true,
  },
  {
    old_url: '/blogs/health/what-are-the-benefits-of-listening-to-podcasts-while-walking',
    new_url: '/blogs/fitness/what-are-the-benefits-of-listening-to-podcasts-while-walking',
    permanent: true,
  },
  {
    old_url: '/blogs/health/how-tai-chi-and-qigong-improve-posture',
    new_url: '/blogs/fitness/how-tai-chi-and-qigong-improve-posture',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/benefits-of-having-pets-for-elderly',
    new_url: '/blogs/busy/benefits-of-having-pets-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/health/vitamins-and-minerals',
    new_url: '/blogs/nutrition/vitamins-and-minerals',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/learn-the-current-top-trends-for-senior-fitness-health',
    new_url: '/blogs/busy/learn-the-current-top-trends-for-senior-fitness-health',
    permanent: true,
  },
  {
    old_url: '/blogs/health/exercise-promotes-healthy-ageing-learn-how',
    new_url: '/blogs/fitness/exercise-promotes-healthy-ageing-learn-how',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/the-char-dham-yatra-seniors-say-its-the-path-to-salvation',
    new_url: '/blogs/convenience/the-char-dham-yatra-seniors-say-its-the-path-to-salvation',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/bathroom-safety-products-for-seniors',
    new_url: '/blogs/convenience/bathroom-safety-products-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/electricity-safety-tips-for-elderly',
    new_url: '/blogs/busy/electricity-safety-tips-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-learn-to-play-the-guitar-as-an-adult-here-are-five-tips',
    new_url: '/blogs/busy/how-to-learn-to-play-the-guitar-as-an-adult-here-are-five-tips',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/get-the-best-musical-instruments-for-seniors-to-learn',
    new_url: '/blogs/busy/get-the-best-musical-instruments-for-seniors-to-learn',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/musical-instruments-to-learn-over-50-years-of-age',
    new_url: '/blogs/busy/musical-instruments-to-learn-over-50-years-of-age',
    permanent: true,
  },
  {
    old_url: '/blogs/health/best-cooking-oils-for-seniors',
    new_url: '/blogs/nutrition/best-cooking-oils-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/know-everything-about-a-tracheostomy-uses-benefits-risks',
    new_url: '/blogs/busy/know-everything-about-a-tracheostomy-uses-benefits-risks',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/india-most-lovely-destinations-for-seniors',
    new_url: '/blogs/convenience/india-most-lovely-destinations-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/10-best-indian-hill-stations-for-summer-vacation-in-2022',
    new_url: '/blogs/convenience/10-best-indian-hill-stations-for-summer-vacation-in-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/volunteering-senior-should-i',
    new_url: '/blogs/busy/volunteering-senior-should-i',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/what-seniors-get-from-giving-back',
    new_url: '/blogs/busy/what-seniors-get-from-giving-back',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/retired-want-to-travel-post-covid-we-will-take-you-places',
    new_url: '/blogs/convenience/retired-want-to-travel-post-covid-we-will-take-you-places',
    permanent: true,
  },
  {
    old_url: '/blogs/health/easy-yoga-for-seniors',
    new_url: '/blogs/fitness/easy-yoga-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/gift-ideas-for-senior-citizens',
    new_url: '/blogs/busy/gift-ideas-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/witness-the-best-places-to-visit-in-ooty',
    new_url: '/blogs/convenience/witness-the-best-places-to-visit-in-ooty',
    permanent: true,
  },
  {
    old_url: '/blogs/health/benefits-of-meditation',
    new_url: '/blogs/fitness/benefits-of-meditation',
    permanent: true,
  },
  {
    old_url: '/blogs/health/7-best-tips-for-promoting-seniors-health-wellness',
    new_url: '/blogs/busy/7-best-tips-for-promoting-seniors-health-wellness',
    permanent: true,
  },
  {
    old_url: '/blogs/health/drinks-to-boost-immune-system',
    new_url: '/blogs/nutrition/6-summer-foods-to-boost-your-immunity',
    permanent: true,
  },
  {
    old_url: '/blogs/health/healthy-diet-tips-for-elders-with-hypertension',
    new_url: '/blogs/nutrition/healthy-diet-tips-for-elders-with-hypertension',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/what-makes-the-tennis-game-a-great-exercise-for-seniors-over-50-ears',
    new_url: '/blogs/busy/what-makes-the-tennis-game-a-great-exercise-for-seniors-over-50-years',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/guide-to-grow-coriander-at-home',
    new_url: '/blogs/busy/guide-to-grow-coriander-at-home',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-quickly-learn-vocabulary-from-stories',
    new_url: '/blogs/busy/how-to-quickly-learn-vocabulary-from-stories',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/life-afterlife-the-mysteries-entwined',
    new_url: '/blogs/busy/life-afterlife-the-mysteries-entwined',
    permanent: true,
  },
  {
    old_url: '/blogs/play/exercise-seniors',
    new_url: '/blogs/fitness/exercise-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/music-therapy-benefits-for-seniors',
    new_url: '/blogs/convenience/music-therapy-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/learn-how-to-support-a-memory-loss-patient-when-travelling',
    new_url: '/blogs/busy/learn-how-to-support-a-memory-loss-patient-when-travelling',
    permanent: true,
  },
  {
    old_url: '/blogs/health/learn-about-sleeping-disorders-in-dementia',
    new_url: '/blogs/busy/learn-about-sleeping-disorders-in-dementia',
    permanent: true,
  },
  {
    old_url: '/blogs/senior-talk/7-doctors-for-every-being-15-life-hacks-mr-harish-shrivastav',
    new_url: '/blogs/busy/7-doctors-for-every-being-15-life-hacks-mr-harish-shrivastav',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-explain-cryptocurrency-to-seniors',
    new_url: '/blogs/busy/how-to-explain-cryptocurrency-to-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/busy/simple-foot-care-tips-for-seniors-its-importance',
    new_url: '/blogs/health/simple-foot-care-tips-for-seniors-its-importance',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/helpful-summer-travel-and-safety-tips-for-seniors-to-enjoy-the-outdoors',
    new_url: '/blogs/convenience/helpful-summer-travel-and-safety-tips-for-seniors-to-enjoy-the-outdoors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/knowledge-is-key-learn-more-about-parkinsons-disease-to-manage-it',
    new_url: '/blogs/busy/knowledge-is-key-learn-more-about-parkinsons-disease-to-manage-it',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-to-make-life-enjoyable-for-seniors-with-memory-disorder',
    new_url: '/blogs/busy/how-to-make-life-enjoyable-for-seniors-with-memory-disorder',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-can-quality-of-life-improve-your-memory-well-tell-you',
    new_url: '/blogs/nutrition/how-can-quality-of-life-improve-your-memory-well-tell-you',
    permanent: true,
  },
  {
    old_url: '/blogs/health/learn-why-seniors-need-to-pay-more-attention-to-their-feet',
    new_url: '/blogs/busy/learn-why-seniors-need-to-pay-more-attention-to-their-feet',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/easy-steps-to-start-a-travel-blog-that-will-give-you-a-profit',
    new_url: '/blogs/convenience/easy-steps-to-start-a-travel-blog-that-will-give-you-a-profit',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/memory-care-tips-tricks-for-those-above-40-to-avoid-memory-loss',
    new_url: '/blogs/busy/memory-care-tips-tricks-for-those-above-40-to-avoid-memory-loss',
    permanent: true,
  },
  {
    old_url: '/blogs/health/a-better-way-of-communicating-with-someone-who-has-dementia',
    new_url: '/blogs/busy/a-better-way-of-communicating-with-someone-who-has-dementia',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/learn-which-are-the-best-supplements-for-successful-healthy-ageing',
    new_url: '/blogs/busy/learn-which-are-the-best-supplements-for-successful-healthy-ageing',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/learn-about-bitcoin-using-it-as-currency',
    new_url: '/blogs/nutrition/learn-about-bitcoin-using-it-as-currency',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/effects-of-heatwaves-on-the-physical-fitness-of-seniors',
    new_url: '/blogs/busy/effects-of-heatwaves-on-the-physical-fitness-of-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/reading/7-benefits-of-reading-books-while-you-are-ageing',
    new_url: '/blogs/busy/7-benefits-of-reading-books-while-you-are-ageing',
    permanent: true,
  },
  {
    old_url: '/blogs/health/what-can-you-do-to-keep-your-loved-one-with-dementia-stimulated',
    new_url: '/blogs/busy/what-can-you-do-to-keep-your-loved-one-with-dementia-stimulated',
    permanent: true,
  },
  {
    old_url: '/blogs/health/senior-mental-health-tips-to-improve-cognitive-mental-health',
    new_url: '/blogs/busy/senior-mental-health-tips-to-improve-cognitive-mental-health',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/a-quest-to-answer-what-is-spirituality',
    new_url: '/blogs/busy/a-quest-to-answer-what-is-spirituality',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/all-you-need-to-know-about-types-of-tracheostomy-tubes',
    new_url: '/blogs/busy/all-you-need-to-know-about-types-of-tracheostomy-tubes',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/effective-ways-to-cope-with-caregiving-stress-so-you-can-be-your-best',
    new_url: '/blogs/busy/effective-ways-to-cope-with-caregiving-stress-so-you-can-be-your-best',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/five-ways-boost-your-memory',
    new_url: '/blogs/busy/five-ways-boost-your-memory',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/uttarakhand-chota-char-dham-yatra-a-must-visit',
    new_url: '/blogs/convenience/uttarakhand-chota-char-dham-yatra-a-must-visit',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/learn-about-the-top-10-spiritual-quotes-along-with-some-example',
    new_url: '/blogs/busy/learn-about-the-top-10-spiritual-quotes-along-with-some-example',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/importance-of-chanting-vishnu-mantra-in-your-life',
    new_url: '/blogs/busy/importance-of-chanting-vishnu-mantra-in-your-life',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/tips-traveling-elderly-family-vacations',
    new_url: '/blogs/convenience/tips-traveling-elderly-family-vacations',
    permanent: true,
  },
  {
    old_url: '/blogs/health/what-is-long-covid-its-symptoms-risks-factors-causes',
    new_url: '/blogs/busy/what-is-long-covid-its-symptoms-risks-factors-causes',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/lord-shiva-aarti-lyrics-meaning-and-benefits',
    new_url: '/blogs/busy/lord-shiva-aarti-lyrics-meaning-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/health/best-foods-that-lower-blood-sugar-in-seniors',
    new_url: '/blogs/nutrition/best-foods-that-lower-blood-sugar-in-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-to-burn-fat-with-the-help-of-blackcurrant',
    new_url: '/blogs/nutrition/how-to-burn-fat-with-the-help-of-blackcurrant',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/lauki-juice-benefits-for-seniors',
    new_url: '/blogs/busy/lauki-juice-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/dragon-fruit-benefits-for-seniors',
    new_url: '/blogs/convenience/dragon-fruit-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/yellow-dragon-fruit-benefits-and-nutrition-value',
    new_url: '/blogs/convenience/yellow-dragon-fruit-benefits-and-nutrition-value',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/places-to-visit-in-india-for-elderly-travellers',
    new_url: '/blogs/convenience/places-to-visit-in-india-for-elderly-travellers',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/holy-places-in-india-for-elderly-travellers',
    new_url: '/blogs/convenience/holy-places-in-india-for-elderly-travellers',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/tirupati-balaji-mandir',
    new_url: '/blogs/busy/tirupati-balaji-mandir',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/types-of-dragon-fruit',
    new_url: '/blogs/busy/types-of-dragon-fruit',
    permanent: true,
  },
  {
    old_url: '/blogs/health/health-benefits-of-senior-yoga',
    new_url: '/blogs/fitness/health-benefits-of-senior-yoga',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/east-facing-house-vastu-plan',
    new_url: '/blogs/convenience/east-facing-house-vastu-plan',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/vastu-for-home-rules',
    new_url: '/blogs/busy/vastu-for-home-plan',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-calligraphy',
    new_url: '/blogs/busy/what-is-calligraphy',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/7-amazing-benefits-of-calligraphy',
    new_url: '/blogs/busy/7-amazing-benefits-of-calligraphy',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/best-art-and-crafts-ideas-for-elderly',
    new_url: '/blogs/busy/best-art-and-crafts-ideas-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-get-senior-citizen-card',
    new_url: '/blogs/convenience/how-to-get-senior-citizen-card',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/income-tax-slab-for-seniors-citizen',
    new_url: '/blogs/busy/income-tax-slab-for-seniors-citizen',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/tax-saving-schemes-for-senior-citizens',
    new_url: '/blogs/busy/tax-saving-schemes-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/post-office-saving-scheme-for-senior-citizens',
    new_url: '/blogs/busy/post-office-saving-scheme-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/govt-pension-schemes-for-senior-citizens',
    new_url: '/blogs/busy/govt-pension-schemes-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-upi-id',
    new_url: '/blogs/busy/what-is-upi-id',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/vidhwa-pension-yojna-2022',
    new_url: '/blogs/convenience/vidhwa-pension-yojna-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/senior-citizens-concession-in-flights-in-2022',
    new_url: '/blogs/convenience/senior-citizens-concession-in-flights-in-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/senior-citizens-guide-financial-independence',
    new_url: '/blogs/busy/senior-citizens-guide-financial-independence',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-senior-citizen-act-2007',
    new_url: '/blogs/busy/what-is-senior-citizen-act-2007',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/best-5-tips-for-calligraphy-beginners',
    new_url: '/blogs/busy/best-5-tips-for-calligraphy-beginners',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-gayatri-mantra',
    new_url: '/blogs/busy/what-is-gayatri-mantra',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/ganesh-ji-ki-aarti-meaning-and-benefits',
    new_url: '/blogs/busy/ganesh-ji-ki-aarti-meaning-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/hanuman-ji-ki-aarti-vidhi-lyrics-benefits-for-devotees',
    new_url: '/blogs/busy/hanuman-ji-ki-aarti-vidhi-lyrics-benefits-for-devotees',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/khajuraho-mandir-madhya-pradesh',
    new_url: '/blogs/busy/khajuraho-mandir-madhya-pradesh',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/khatu-shyam-ji-mandir-jaipur-rajasthan',
    new_url: '/blogs/busy/khatu-shyam-ji-mandir-jaipur-rajasthan',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/brahma-temple-pushkar',
    new_url: '/blogs/busy/brahma-temple-pushkar',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/sleeping-direction-as-per-vastu',
    new_url: '/blogs/busy/sleeping-direction-as-per-vastu',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/south-facing-house-vastu-plan-in-indian-style',
    new_url: '/blogs/busy/south-facing-house-vastu-plan-in-indian-style',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/west-facing-house-vastu-plan',
    new_url: '/blogs/busy/west-facing-house-vastu-plan',
    permanent: true,
  },
  {
    old_url: '/blogs/health/indian-diet-for-diabetic-patients',
    new_url: '/blogs/nutrition/indian-diet-for-diabetic-patients',
    permanent: true,
  },
  {
    old_url: '/blogs/health/tips-for-diabetic-elders-during-covid-19',
    new_url: '/blogs/busy/tips-for-diabetic-elders-during-covid-19',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/gyan-mudra-and-its-benefits',
    new_url: '/blogs/busy/gyan-mudra-and-its-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/7-chakras-meaning-in-human-body',
    new_url: '/blogs/busy/7-chakras-meaning-in-human-body',
    permanent: true,
  },
  {
    old_url: '/blogs/health/recovery-after-knee-replacement-surgery',
    new_url: '/blogs/busy/recovery-after-knee-replacement-surgery',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/mahamrityunjay-mantra-meaning-and-benefits',
    new_url: '/blogs/busy/mahamrityunjay-mantra-meaning-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/kuber-mantra-meaning-and-benefits',
    new_url: '/blogs/busy/kuber-mantra-meaning-and-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/health/home-remedies-for-headache-relief',
    new_url: '/blogs/nutrition/home-remedies-for-headache-relief',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/easy-to-use-smartphones-for-seniors',
    new_url: '/blogs/convenience/easy-to-use-smartphones-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/7-ways-to-be-social-during-covid-pandemic',
    new_url: '/blogs/busy/7-ways-to-be-social-during-covid-pandemic',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/how-to-grow-dragon-fruit-trees',
    new_url: '/blogs/busy/how-to-grow-dragon-fruit-trees',
    permanent: true,
  },
  {
    old_url: '/blogs/food/5-best-indian-superfoods-for-seniors',
    new_url: '/blogs/busy/5-best-indian-superfoods-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/food/healthy-veg-iftar-recipes-for-ramadan-2022',
    new_url: '/blogs/nutrition/healthy-veg-iftar-recipes-for-ramadan-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/bhagavad-gita-the-song-of-god',
    new_url: '/blogs/busy/bhagavad-gita-the-song-of-god',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/karma-meaning-in-bhagavad-gita',
    new_url: '/blogs/busy/karma-meaning-in-bhagavad-gita',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/moksha-defination-and-levels',
    new_url: 'm/blogs/convenience/moksha-defination-and-levels',
    permanent: true,
  },
  {
    old_url: '/blogs/food/6-summer-foods-to-boost-your-immunity',
    new_url: '/blogs/nutrition/6-summer-foods-to-boost-your-immunity',
    permanent: true,
  },
  {
    old_url: '/blogs/food/easy-breakfast-recipes-for-seniors',
    new_url: '/blogs/nutrition/easy-breakfast-recipes-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/food/home-made-delhi-chaat-recipe-for-seniors',
    new_url: '/blogs/nutrition/home-made-delhi-chaat-recipe-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/vastu-shastra-meaning-and-health-benefits',
    new_url: '/blogs/busy/vastu-shastra-meaning-and-health-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/financial-planning-ideas-after-retirement',
    new_url: '/blogs/convenience/financial-planning-ideas-after-retirement',
    permanent: true,
  },
  {
    old_url: '/blogs/health/diseases-affecting-seniors-above-60',
    new_url: '/blogs/convenience/diseases-affecting-seniors-above-60',
    permanent: true,
  },
  {
    old_url: '/blogs/health/can-your-eyes-tell-you-about-your-health',
    new_url: '/blogs/convenience/can-your-eyes-tell-you-about-your-health',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/books-on-health-that-will-motivate-you-to-be-healthy',
    new_url: '/blogs/busy/books-on-health-that-will-motivate-you-to-be-healthy',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/top-10-geeta-shlokas-meaning',
    new_url: '/blogs/busy/top-10-geeta-shlokas-meaning',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/12-laws-of-karma-meaning',
    new_url: '/blogs/busy/12-laws-of-karma-meaning',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/unknown-facts-about-the-kalkaji-mandir',
    new_url: '/blogs/convenience/unknown-facts-about-the-kalkaji-mandir',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/14-reasons-to-smash-the-age-gap-barrier',
    new_url: '/blogs/convenience/14-reasons-to-smash-the-age-gap-barrier',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/age-is-just-a-number',
    new_url: '/blogs/convenience/age-is-just-a-number',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/finding-meaning-and-purpose-old-age',
    new_url: '/blogs/busy/finding-meaning-and-purpose-old-age',
    permanent: true,
  },
  {
    old_url: '/blogs/health/how-you-can-keep-your-heart-healthy',
    new_url: '/blogs/convenience/how-you-can-keep-your-heart-healthy',
    permanent: true,
  },
  {
    old_url: '/blogs/health/5-health-troubles-seniors-which-come-unannounced',
    new_url: '/blogs/convenience/5-health-troubles-seniors-which-come-unannounced',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-does-karma-impact-your-life',
    new_url: '/blogs/busy/how-does-karma-impact-your-life',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-are-the-facts-about-bhagavad-gita',
    new_url: '/blogs/busy/what-are-the-facts-about-bhagavad-gita',
    permanent: true,
  },
  {
    old_url: '/blogs/health/food-to-eat-during-typhoid',
    new_url: '/blogs/nutrition/health-benefits-of-pomegranate-in-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/sukhasana-benefits-for-seniors',
    new_url: '/blogs/fitness/sukhasana-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/health/coconut-oil-benefits',
    new_url: '/blogs/nutrition/coconut-oil-benefits',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/taking-care-of-aging-parents',
    new_url: '/blogs/busy/taking-care-of-aging-parents',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/trending-dating-app-for-seniors',
    new_url: '/blogs/convenience/trending-dating-app-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/learn-12-hacks-to-spice-up-your-sex-life-after-50',
    new_url: '/blogs/convenience/learn-12-hacks-to-spice-up-your-sex-life-after-50',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/glasses-that-make-you-look-younger',
    new_url: '/blogs/convenience/glasses-that-make-you-look-younger',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/dressing-style-for-the-elderly',
    new_url: '/blogs/busy/dressing-style-for-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/best-retirement-gifts-for-men',
    new_url: '/blogs/busy/best-retirement-gifts-for-men',
    permanent: true,
  },
  {
    old_url: '/blogs/play/14-activities-for-elderly-people-that-arent-boring',
    new_url: '/blogs/busy/14-activities-for-elderly-people-that-arent-boring',
    permanent: true,
  },
  {
    old_url: '/blogs/reading/best-fiction-books',
    new_url: '/blogs/busy/best-fiction-books',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/railway-concession-for-senior-citizens',
    new_url: '/blogs/busy/railway-concession-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/senior-citizen-saving-schemes-in-2022',
    new_url: '/blogs/busy/senior-citizen-saving-schemes-in-2022',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/jobs-for-retired-person-in-india',
    new_url: '/blogs/busy/jobs-for-retired-person-in-india',
    permanent: true,
  },
  {
    old_url: '/blogs/health/vitamins-for-eyes',
    new_url: '/blogs/nutrition/vitamins-for-eyes',
    permanent: true,
  },
  {
    old_url: '/blogs/health/immunity-boosting-foods',
    new_url: '/blogs/nutrtion/immunity-boosting-foods',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-celebrate-a-risk-free-diwali-with-elders-in-2020',
    new_url: '/blogs/busy/how-to-celebrate-a-risk-free-diwali-with-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/diwali-decoration-ideas-at-home',
    new_url: '/blogs/busy/diwali-decoration-ideas-at-home',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/eyeglass-frames-for-older-women',
    new_url: '/blogs/convenience/eyeglass-frames-for-older-women',
    permanent: true,
  },
  {
    old_url: '/blogs/play/science-fun-seniors-play',
    new_url: '/blogs/busy/science-fun-seniors-play',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/covid-19-lockdown-fly-or-not-fly-get-your-answer-here',
    new_url: '/blogs/convenience/covid-19-lockdown-fly-or-not-fly-get-your-answer-here',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/how-keep-feet-swelling-long-flights',
    new_url: '/blogs/convenience/how-keep-feet-swelling-long-flights',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/banking-services-will-now-come-your-home-read-know-how',
    new_url: '/blogs/busy/banking-services-will-now-come-your-home-read-know-how',
    permanent: true,
  },
  {
    old_url: '/blogs/busy/what-is-karma',
    new_url: '/blogs/busy/how-does-karma-impact-your-life',
    permanent: true,
  },
  {
    old_url: '/blogs/busy/how-to-celebrate-a-risk-free-diwali-with-elders-in-2020',
    new_url: '/blogs/busy/how-to-celebrate-a-risk-free-diwali-with-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/convenience/karma-meaning-in-bhagavad-gita',
    new_url: '/blogs/busy/karma-meaning-in-bhagavad-gita',
    permanent: true,
  },
  {
    old_url: '/blogs/health/the-common-eye-diseases',
    new_url: '/blogs/health/eyecare-common-eye-diseases',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/drinks-to-boost-immune-system',
    new_url: '/blogs/health/drinks-to-boost-immune-system',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/sukhasana-benefits-for-seniors',
    new_url: '/blogs/fitness/sukhasana-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/beauty/skincare/food-for-healthy-skin',
    new_url: '/blogs/health/food-for-healthy-skin',
    permanent: true,
  },
  {
    old_url: '/living-parkinsons',
    new_url: '/blogs/health/living-parkinsons',
    permanent: true,
  },
  {
    old_url: '/community',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/empower-covid-care1',
    new_url: '/plans',
    permanent: false,
  },
  {
    old_url: '/plans/assure',
    new_url: '/plans',
    permanent: false,
  },
  {
    old_url: '/plans/empower',
    new_url: '/plans',
    permanent: false,
  },
  {
    old_url: '/plans/smart-home',
    new_url: '/plans',
    permanent: false,
  },
  {
    old_url: '/global-empower-covid-care',
    new_url: '/plans',
    permanent: false,
  },
  {
    old_url: '/services/anorexia-care-plan-for-elders',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/critical-care-nursing-services-at-home',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/dementia-care',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/doctor-home-visit',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/emergency',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/engagement',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/healthcare',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/paralysis-patient-care-at-home',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/physiotherapy-at-home',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/services/support',
    new_url: '/services',
    permanent: false,
  },
  {
    old_url: '/blogs/tag/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/home-interior-tips-for-elderly',
    new_url: '/blogs/busy/home-interior-tips-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/home-Interior-tips-for-elderly',
    new_url: '/blogs/busy/home-interior-tips-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/Benefits-of-Lifelong-Learning',
    new_url: '/blogs/busy/benefits-of-lifelong-learning',
    permanent: true,
  },
  {
    old_url: '/travel/turkey',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/author/admin/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/feed',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/pulmonary-embolism-elders-get-your-facts-right-to-ensure-correct-treatment',
    new_url: '/blogs/busy/pulmonary-embolism-elders-get-your-facts-right-to-ensure-correct-treatment',
    permanent: true,
  },
  {
    old_url: '/blogs/health/simple-healthy-habits-prevent-stroke',
    new_url: '/blogs/busy/simple-healthy-habits-prevent-stroke',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/privacy-policy',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/community/events/republicdayevent',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/giving-back-keeps-seniors-healthy',
    new_url: '/blogs/busy/giving-back-keeps-seniors-healthy',
    permanent: true,
  },
  {
    old_url: '/blogs/health/page/:path*',
    new_url: '/blogs/health',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/how-can-i-benefit-from-seniors-life-experiences',
    new_url: '/blogs/busy/how-can-i-benefit-from-seniors-life-experiences',
    permanent: true,
  },
  {
    old_url: '/blogs/health/hip-replacement-things-consider',
    new_url: '/blogs/busy/hip-replacement-things-consider',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/balancing-work-and-elder-care-through-the-coronavirus-crisis',
    new_url: '/blogs/busy/balancing-work-and-elder-care-through-the-coronavirus-crisis',
    permanent: true,
  },
  {
    old_url: '/blogs/author/anjali-bishtemoha-com/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/blog-lifestyle-keeping-connected-during-covid-19-pandemic/:path*',
    new_url: '/blogs/busy/blog-lifestyle-keeping-connected-during-covid-19-pandemic',
    permanent: true,
  },
  {
    old_url: '/cart',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/home-remedies-to-get-rid-of-pimples-in-elders',
    new_url: '/blogs/nutrition/home-remedies-to-get-rid-of-pimples-in-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/5-ways-for-seniors-to-spend-their-time-resourcefully',
    new_url: '/blogs/convenience/5-ways-for-seniors-to-spend-their-time-resourcefully',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/Balancing-Work-and-Elder-Care-Through-the-Coronavirus-Crisis',
    new_url: '/blogs/busy/balancing-work-and-elder-care-through-the-coronavirus-crisis',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/home-interior-tips-for-elderly',
    new_url: '/blogs/busy/home-interior-tips-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/health/how-covid-19-third-wave-will-be-different-from-first-or-second-wave/feed',
    new_url: '/blogs/health/how-covid-19-third-wave-will-be-different-from-first-or-second-wave',
    permanent: true,
  },
  {
    old_url: '/travel/east-usa-summer-special',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/travel/east-usa-summer-special/',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/page/:path*',
    new_url: '/blogs/fitness',
    permanent: true,
  },
  {
    old_url: '/shc-google',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/types-of-elder-abuse/:path*',
    new_url: '/blogs/convenience/types-of-elder-abuse',
    permanent: true,
  },
  {
    old_url: '/blogs/health/how-to-keep-your-bones-strong-as-you-age',
    new_url: '/blogs/fitness/how-to-keep-your-bones-strong-as-you-age',
    permanent: true,
  },
  {
    old_url: '/emoha-blogs/category/experience',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/experience',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/dlf-club5-event',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/arthritis-and-its-different-types-causes',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/benefits-of-apple-cider-vinegar',
    new_url: '/blogs/nutrition/benefits-of-apple-cider-vinegar',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/diwali-gift-ideas',
    new_url: '/blogs/busy/diwali-gift-ideas',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/why-dancing-is-fun-great-for-body-and-mind',
    new_url: '/blogs/convenience/types-of-elder-abuse',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/happy-teachers-day',
    new_url: '/blogs/busy/happy-teachers-day',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/being-alone',
    new_url: '/blogs/busy/being-alone',
    permanent: true,
  },
  {
    old_url: '/Community/Events/ddadance',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/decoration-ideas-at-home-for-senior-citizens',
    new_url: '/blogs/busy/decoration-ideas-at-home-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/challenges-of-caring-for-elderly-parents',
    new_url: '/blogs/busy/challenges-of-caring-for-elderly-parents',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/how-to-stop-elder-abuse/:path*',
    new_url: '/blogs/convenience/how-to-stop-elder-abuse',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/disclaimer',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/benefits-of-owning-a-dog',
    new_url: '/blogs/busy/benefits-of-owning-a-dog',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/career',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/aging-well',
    new_url: '/blogs/busy/aging-well',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/health/benefits-of-plasma-therapy-in-covid-19-and-side-effects/feed',
    new_url: '/blogs/health/benefits-of-plasma-therapy-in-covid-19-and-side-effects',
    permanent: true,
  },
  {
    old_url: '/blogs/health/swine-flu-in-the-elderly/feed',
    new_url: '/blogs/health/swine-flu-in-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/best-cars-in-india-for-seniors',
    new_url: '/blogs/busy/best-cars-in-india-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/travelling-within-india-during-covid',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/effects-of-air-pollution-on-the-elderly/feed',
    new_url: '/blogs/health/effects-of-air-pollution-on-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/good-genes-are-nice-joy-better',
    new_url: '/blogs/busy/good-genes-are-nice-joy-better',
    permanent: true,
  },
  {
    old_url: '/blogs/health/retired-do-some-volunteering-to-reap-good-karma-these-surprising-benefits-of-good-health',
    new_url: '/blogs/busy/retired-do-some-volunteering-to-reap-good-karma-these-surprising-benefits-of-good-health',
    permanent: true,
  },
  {
    old_url: '/rose-day-celebration',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/travel/sikkim-and-darjeeling-extravaganza',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/life-lessons-imparted-from-the-garuda-purana',
    new_url: '/blogs/busy/life-lessons-imparted-from-the-garuda-purana',
    permanent: true,
  },
  {
    old_url: '/blogs/senior-talk/learnings-challenges-from-42-years-of-professional-life-a-k-roy',
    new_url: '/blogs/busy/learnings-challenges-from-42-years-of-professional-life-a-k-roy',
    permanent: true,
  },
  // {
  //   old_url: '/blogs/health/understanding-parkinsons-disease/amp',
  //   new_url: '/blogs/health/understanding-parkinsons-disease',
  //   permanent: true,
  // },
  {
    old_url: '/blogs/play/top-10-brain-games-for-seniors',
    new_url: '/blogs/busy/top-10-brain-games-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/how-care-your-elderly-loved-ones-during-lockdown',
    new_url: '/blogs/busy/how-care-your-elderly-loved-ones-during-lockdown',
    permanent: true,
  },
  {
    old_url: '/blogs/festival/how-to-celebrate-a-risk-free-diwali-with-elders-in-2020/feed',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/ufaq',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/valentine-day',
    new_url: '/blogs/busy/valentine-day',
    permanent: true,
  },
  {
    old_url: '/blogs/technology/innovative-products-for-the-elderly',
    new_url: '/blogs/convenience/innovative-products-for-the-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/party/50-free-things-you-can-do-during-lockdown',
    new_url: '/blogs/busy/50-free-things-you-can-do-during-lockdown',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/what-seniors-get-from-giving-back/feed',
    new_url: '/blogs/busy/what-seniors-get-from-giving-back',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/blogs',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/things-to-consider-before-buying-health-insurance-for-senior-citizens',
    new_url: '/blogs/busy/things-to-consider-before-buying-health-insurance-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/a-new-youi',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/health/so-many-thoughts-in-the-head-but-cant-voice-them-aphasia',
    new_url: '/blogs/busy/so-many-thoughts-in-the-head-but-cant-voice-them-aphasia',
    permanent: true,
  },
  {
    old_url: '/board/jai-pattathil',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/reading/top-10-must-read-books-for-seniors',
    new_url: '/blogs/busy/top-10-must-read-books-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/cookies-policy',
    new_url: '/blogs/nutrition',
    permanent: true,
  },
  {
    old_url: '/blogs/health/which-is-better-covaxin-or-covishield',
    new_url: '/blogs/busy/which-is-better-covaxin-or-covishield',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/blog-learn-can-lifelong-learning-help-we-age',
    new_url: '/blogs/busy/blog-learn-can-lifelong-learning-help-we-age',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/elders-engagement-at-home',
    new_url: '/blogs/busy/elders-engagement-at-home',
    permanent: true,
  },
  {
    old_url: '/blog/lifestyle/keeping-connected-during-covid-19-pandemic',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blog/learn/disclaimer',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blog/busy/tax-saving-schemes-for-senior-citizens',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/health-benefits-of-pomegranate',
    new_url: '/blogs/nutrition/health-benefits-of-pomegranate-in-seniors',
    permanent: true,
  },
  {
    old_url: '/surya-namaskar-benefits-how-it-improves-health',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/discover-the-unexplored-places-in-shimla',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/8-smashing-ways-to-celebrate-lohri-with-your-elders',
    new_url: '/blogs/busy/8-smashing-ways-to-celebrate-lohri-with-your-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/feed',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/fashion/glasses-that-make-you-look-younger/feed',
    new_url: '/blogs/convenience/glasses-that-make-you-look-younger',
    permanent: true,
  },
  {
    old_url: '/elders-speak',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/travel/kenyan-extravaganza',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/travel/kenyan-extravaganza/',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/blog-lifestyle-grandparents-bonding-grandchildren',
    new_url: '/blogs/busy/blog-lifestyle-grandparents-bonding-grandchildren',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/4-ways-seniors-can-stay-young',
    new_url: '/blogs/busy/4-ways-seniors-can-stay-young',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/best-rakhi-return-gifts-for-elder-sister-to-celebrate-raksha-bandhan',
    new_url: '/blogs/busy/best-rakhi-return-gifts-for-elder-sister-to-celebrate-raksha-bandhan',
    permanent: true,
  },
  {
    old_url: '/blogs/health/benefits-of-broccoli',
    new_url: '/blogs/nutrition/benefits-of-broccoli',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/tips-for-senior-citizens-to-travel-after-the-ease-of-covid-19-restrictions',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blog/learn/can-lifelong-learning-help-we-age',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/kamasutra-tips-for-seniors',
    new_url: '/blogs/convenience/kamasutra-tips-for-seniors',
    permanent: true,
  },
  {
    old_url: '/travel/thailand-fully-loaded',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/benefits-music-seniors-alzheimers-and-dementia/:path*',
    new_url: '/blogs/busy/benefits-music-seniors-alzheimers-and-dementia',
    permanent: true,
  },
  {
    old_url: '/blog/lifestyle/grandparents-bonding-grandchildren',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/a-new-you',
    new_url: '/blogs/busy/a-new-you',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/healthy-daily-lifestyle-tips-for-elderly',
    new_url: '/blogs/busy/healthy-daily-lifestyle-tips-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/12-health-benefits-of-giloy-juice/:path*',
    new_url: '/blogs/convenience/12-health-benefits-of-giloy-juice',
    permanent: true,
  },
  {
    old_url: '/blogs/health/how-to-improve-hearing-as-you-age-its-crucial',
    new_url: '/blogs/busy/how-to-improve-hearing-as-you-age-its-crucial',
    permanent: true,
  },
  {
    old_url: '/weppage_sitemap.xml',
    new_url: '/sitemap.xml',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/uncategorized/does-hearing-loss-affect-seniors',
    new_url: '/blogs/health/does-hearing-loss-affect-seniors',
    permanent: true,
  },
  {
    old_url: '/node/:path*',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/travel/south-african-grandeur',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/play/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/play/entertainment-ideas-for-seniors',
    new_url: '/blogs/busy/entertainment-ideas-for-seniors',
    permanent: true,
  },
  {
    old_url: '/when-design-meets-purpose-creating-safe-home-elderly-loved',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/fashion/eyeglass-frames-for-older-women',
    new_url: '/blogs/convenience/eyeglass-frames-for-older-women',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/page/:path*',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/when-design-meets-purpose-creating-safe-home-elderly-loved',
    new_url: '/blogs/busy/when-design-meets-purpose-creating-safe-home-elderly-loved',
    permanent: true,
  },
  {
    old_url: '/blogs/health/difference-between-black-white-yellow-fungus-infections',
    new_url: '/blogs/busy/difference-between-black-white-yellow-fungus-infections',
    permanent: true,
  },
  {
    old_url: '/blogs/author/anjali-bishtemoha-com',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/travel/dazzling-singapore',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/events/14-june-community-evnet-rail-vihar',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/railway-concession-for-senior-citizens',
    new_url: '/blogs/convenience/railway-concession-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/how-to-be-a-better-person-inside-out',
    new_url: '/blogs/busy/how-to-be-a-better-person-inside-out',
    permanent: true,
  },
  {
    old_url: '/travel/chardham-yatra-by-helicopter',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/play/the-importance-of-play-in-old-age/:path*',
    new_url: '/blogs/busy/the-importance-of-play-in-old-age',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/best-places-to-visit-in-summer-in-india-for-elderly-citizens',
    new_url: '/blogs/convenience/best-places-to-visit-in-summer-in-india-for-elderly-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/reignite-passions-through-travel-in-later-life',
    new_url: '/blogs/convenience/reignite-passions-through-travel-in-later-life',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/staircase-vastu',
    new_url: '/blogs/busy/staircase-vastu',
    permanent: true,
  },
  {
    old_url: '/blogs/health/does-hearing-loss-affect-seniors/feed',
    new_url: '/blogs/health/does-hearing-loss-affect-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/nutrition/page/:path*',
    new_url: '/blogs/nutrition',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/makeup-for-older-women',
    new_url: '/blogs/convenience/makeup-for-older-women',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/makeup-for-older-women',
    new_url: '/blogs/convenience/makeup-for-older-women',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/best-ways-to-enrich-your-memory',
    new_url: '/blogs/busy/best-ways-to-enrich-your-memory',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/5-helpful-self-care-practices-for-your-life',
    new_url: '/blogs/busy/5-helpful-self-care-practices-for-your-life',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/buy-and-send-perfect-deepawali-gifts-online',
    new_url: '/blogs/busy/buy-and-send-perfect-deepawali-gifts-online',
    permanent: true,
  },
  {
    old_url: '/blogs/news/44-billion-was-the-cost-of-elon-musk-acquiring-twitter-how-can-he-afford-it',
    new_url: '/blogs/convenience/44-billion-was-the-cost-of-elon-musk-acquiring-twitter-how-can-he-afford-it',
    permanent: true,
  },
  {
    old_url: "/community/events/Emoha's-App-Launch-on-24th-December",
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/technology/18-useful-internet-safety-tips-for-seniors',
    new_url: '/blogs/convenience/18-useful-internet-safety-tips-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/smartphone-safety-for-elderly',
    new_url: '/blogs/convenience/smartphone-safety-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/pf-withdrawal-procedure-a-step-by-step-guide',
    new_url: '/blogs/busy/pf-withdrawal-procedure-a-step-by-step-guide',
    permanent: true,
  },
  {
    old_url: '/ebooks',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/digestive-problems-in-seniours',
    new_url: '/blogs/',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/7-types-of-calligraphy',
    new_url: '/blogs/busy/7-types-of-calligraphy',
    permanent: true,
  },
  {
    old_url: '/blogs/technology/smartphone-safety-for-elderly',
    new_url: '/blogs/convenience/smartphone-safety-for-elderly',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/are-horses-lucky-for-your-home',
    new_url: '/blogs/busy/are-horses-lucky-for-your-home',
    permanent: true,
  },
  {
    old_url: '/blogs/health/learn-ways-to-educate-near-ones-on-dementia-so-they-can-support-you-better',
    new_url: '/blogs/busy/learn-ways-to-educate-near-ones-on-dementia-so-they-can-support-you-better',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/50-free-things-you-can-do-during-lockdown',
    new_url: '/blogs/busy/50-free-things-you-can-do-during-lockdown',
    permanent: true,
  },
  {
    old_url: '/community/events/Christmas-Celebration-with-Elders',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/travel/uttarakhand-extravaganza',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-stop-financial-fraud-against-seniors',
    new_url: '/blogs/safety/how-to-stop-financial-fraud-against-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/experience/how-to-come-out-as-gay-with-grace-and-pride',
    new_url: '/blogs/convenience/how-to-come-out-as-gay-with-grace-and-pride',
    permanent: true,
  },
  {
    old_url: '/elder-care-services/safety',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/sukhasana-benefits-for-seniors/feed',
    new_url: '/blogs/fitness/sukhasana-benefits-for-seniors',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/how-elder-care-landscape-changing-india/:path*',
    new_url: '/blogs/busy/how-elder-care-landscape-changing-india',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/glasses-frames-for-50-60-70-year-old-man',
    new_url: '/blogs/convenience/glasses-frames-for-50-60-70-year-old-man',
    permanent: true,
  },
  {
    old_url: '/blog/lifestyle/privacy-policy',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/skin-care-for-older-adults',
    new_url: '/blogs/health/skin-care-for-older-adults',
    permanent: true,
  },
  {
    old_url: '/blogs/news/4-high-cholesterol-foods-to-avoid',
    new_url: '/blogs/busy/4-high-cholesterol-foods-to-avoid',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/savvy-senior-travellers',
    new_url: '/blogs/convenience/savvy-senior-travellers',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/banking-services-for-senior-citizens',
    new_url: '/blogs/busy/banking-services-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blog/lifestyle/disclaimer',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/festival/ensure-your-elder-has-a-happy-christmas-2020',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/festival/how-to-celebrate-a-risk-free-diwali-with-elders',
    new_url: '/blogs/busy/how-to-celebrate-a-risk-free-diwali-with-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/indias-aging-population-are-we-staring-demographic-time-bomb',
    new_url: '/blogs/convenience/indias-aging-population-are-we-staring-demographic-time-bomb',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/international-travel-new-quarantine-guidelines-during-covid',
    new_url: '/blogs/convenience/international-travel-new-quarantine-guidelines-during-covid',
    permanent: true,
  },
  {
    old_url: '/5-effective-breathing-exercises-increase-lung-capacity',
    new_url: '/blogs/fitness/5-effective-breathing-exercises-increase-lung-capacity',
    permanent: true,
  },
  {
    old_url: '/events/25th-aug-presentation',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/team/shrishti-sahu',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/5-effective-breathing-exercises-increase-lung-capacity',
    new_url: '/blogs/fitness/5-effective-breathing-exercises-increase-lung-capacity',
    permanent: true,
  },
  {
    old_url: '/emoha-kiosk-at-good-earth-city-center',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/fashion/glasses-frames-for-50-60-70-year-old-man',
    new_url: '/blogs/convenience/glasses-frames-for-50-60-70-year-old-man',
    permanent: true,
  },
  {
    old_url: '/blogs/party/good-genes-are-nice-joy-better',
    new_url: '/blogs/busy/good-genes-are-nice-joy-better',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/5-methods-to-maintain-senior-brain-health-improve-memory',
    new_url: '/blogs/busy/5-methods-to-maintain-senior-brain-health-improve-memory',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/does-learning-guitar-have-any-age-limit',
    new_url: '/blogs/busy/does-learning-guitar-have-any-age-limit',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/advantage-of-fitness-tracker-watches-for-elderly',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/fitness/how-can-you-cultivate-a-positive-attitude-for-successful-ageing',
    new_url: '/blogs/busy/how-can-you-cultivate-a-positive-attitude-for-successful-ageing',
    permanent: true,
  },
  {
    old_url: '/blogs/health/why-you-should-be-realistic-about-your-parents-health/:path*',
    new_url: '/blogs/busy/why-you-should-be-realistic-about-your-parents-health',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/money-management-tips-for-senior-citizens',
    new_url: '/blogs/busy/money-management-tips-for-senior-citizens',
    permanent: true,
  },
  {
    old_url: '/blogs/play/best-board-games-family-classic-lockdown/:path*',
    new_url: '/blogs/busy/best-board-games-family-classic-lockdown',
    permanent: true,
  },
  {
    old_url: '/user/register',
    new_url: '/login',
    permanent: true,
  },
  {
    old_url: '/travel/kanha-jungle-getaway',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/home-remedies-to-get-rid-of-pimples-in-elders/:path*',
    new_url: '/blogs/nutrition/home-remedies-to-get-rid-of-pimples-in-elders',
    permanent: true,
  },
  {
    old_url: '/travel/details.html',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/board/dr-anand-deshpande',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/finding-meaning-and-happiness-in-old-age',
    new_url: '/blogs/busy/finding-meaning-and-happiness-in-old-age',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/happy-womens-day',
    new_url: '/blogs/busy/happy-womens-day',
    permanent: true,
  },
  {
    old_url: '/travel/spanish-dhamaka',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/give-back/all-about-emotions-why-are-they-so-important',
    new_url: '/blogs/busy/all-about-emotions-why-are-they-so-important',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/best-sunglasses-for-seniors',
    new_url: '/blogs/convenience/best-sunglasses-for-seniors',
    permanent: true,
  },
  {
    old_url: '/travel/glorious-gujarat',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/food/career',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-laughing-buddha-meaning-in-life',
    new_url: '/blogs/busy/what-is-laughing-buddha-meaning-in-life',
    permanent: true,
  },
  {
    old_url: '/nri-testimonial-elder-care',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/celebrations/10-amazing-ways-to-ignite-the-patriotism-on-independence-day',
    new_url: '/blogs/busy/10-amazing-ways-to-ignite-the-patriotism-on-independence-day',
    permanent: true,
  },
  {
    old_url: '/travel/nepal-buy-1-get-1-free-summer-special',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/this-guide-is-all-you-need-to-begin-travel-blogging-today',
    new_url: '/blogs/convenience/this-guide-is-all-you-need-to-begin-travel-blogging-today',
    permanent: true,
  },
  {
    old_url: '/blogs/health/24-home-remedies-for-cough',
    new_url: '/blogs/convenience/24-home-remedies-for-cough',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/how-to-celebrate-makar-sankranti-pongal-bihu-with-elders',
    new_url: '/blogs/busy/how-to-celebrate-makar-sankranti-pongal-bihu-with-elders',
    permanent: true,
  },
  {
    old_url: '/blogs/health/has-insomnia-been-bothering-you-lately-learn-to-treat-it-safely',
    new_url: '/blogs/busy/has-insomnia-been-bothering-you-lately-learn-to-treat-it-safely',
    permanent: true,
  },
  {
    old_url: '/blogs/skincare/the-benefits-of-water-therapy-and-its-considerations',
    new_url: '/blogs/health/the-benefits-of-water-therapy-and-its-considerations',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/what-is-the-difference-between-religion-and-spirituality',
    new_url: '/blogs/busy/what-is-the-difference-between-religion-and-spirituality',
    permanent: true,
  },
  {
    old_url: '/blogs/travel/every-senior-citizen-should-visit-this-historical-ram-mandir',
    new_url: '/blogs/convenience/every-senior-citizen-should-visit-this-historical-ram-mandir',
    permanent: true,
  },
  {
    old_url: '/travel/jiva-gram-day-tour',
    new_url: '/blogs/tag/water-therapy-benefits-for-skin',
    permanent: true,
  },
  {
    old_url: '/blogs/health/everything-you-need-to-know-about-the-7-different-alzheimers-stages',
    new_url: '/blogs',
    permanent: true,
  },
  {
    old_url: '/blogs/fashion/12-super-comfy-diwali-outfits-for-elders',
    new_url: '/blogs/busy/12-super-comfy-diwali-outfits-for-elders',
    permanent: true,
  },
  {
    old_url: '/gandhi-on-canvas-event',
    new_url: '/',
    permanent: true,
  },
  {
    old_url: '/blogs/health/benefits-of-spinach',
    new_url: '/blogs/nutrition/benefits-of-spinach',
    permanent: true,
  },
  {
    old_url: '/blogs/lifestyle/love-at-sixty-seventy/:path*',
    new_url: '/blogs/busy/love-at-sixty-seventy',
    permanent: true,
  },
  {
    old_url: '/blogs/learn/republic-day-with-elders',
    new_url: '/blogs/busy/republic-day-with-elders',
    permanent: true,
  },
];

const mappedBlogsLinks = map(blogsRedirection, data => {
  return {
    source: data?.old_url,
    destination: data?.new_url,
    permanent: data?.permanent,
  };
});

module.exports = mappedBlogsLinks;
