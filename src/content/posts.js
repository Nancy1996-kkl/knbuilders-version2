// Full blog articles. Each post renders to its own prerendered page at
// /blog/<slug>.html with BlogPosting + FAQ schema. Body is a list of blocks
// so the layout stays consistent and answer-engine-friendly.
//
// Block types: { h2 } | { p } | { ul:[...] } | { ol:[...] } | { tip } | { table:{ head, rows } }
//
// `readTime` is calculated from the word count at the bottom of this file, so it
// stays accurate whenever an article is edited. The blog list in data.js
// (BLOGS) is derived from this array too — edit titles and excerpts here only.

export const AUTHORS = {
  priya: { name: 'Priya Venkat', role: 'Principal Architect, KN Builders', img: 'team4' },
  arjun: { name: 'Arjun Mehta', role: 'Lead Civil Engineer, KN Builders', img: 'team2' },
  tamilpriya: { name: 'Tamil Priya', role: 'Founder & CEO, KN Builders', img: 'team1' },
}

export const POSTS = [
  {
    slug: 'cost-to-build-house-chennai',
    services: ['residential-construction', 'design-and-planning'],
    tag: 'Cost Guide',
    title: 'What Does It Cost to Build a House in Chennai in 2026?',
    metaTitle: 'Cost to Build a House in Chennai (2026) | KN Builders',
    metaDescription: 'A transparent 2026 guide to house construction costs in Chennai — per-sq-ft rates by specification, where the money goes, the costs people forget, and how to plan your budget.',
    date: 'May 28, 2026',
    dateISO: '2026-05-28',
    updatedISO: '2026-10-01',
    img: 'blog4',
    author: 'arjun',
    excerpt: 'Per-square-foot rates by specification, where the money actually goes, the costs people forget, and how to plan a realistic budget in Chennai.',
    takeaways: [
      'In 2026, a standard-specification house in Chennai typically costs ₹2,000–₹2,800 per sq ft of built-up area for a turnkey build.',
      'Specification and finishes, number of floors, soil condition and material prices are the biggest cost drivers.',
      'Approvals, utility connections, sump, compound wall and interiors are often quoted separately — budget for them from day one.',
      'An itemised quote tied to a milestone payment schedule is the best protection against budget surprises.',
    ],
    body: [
      { p: 'The first question almost every homeowner in Chennai asks is simple: what will it cost to build my house? The honest answer is that it depends on what you build and how you finish it — but that does not mean you should accept a vague figure. With the right breakdown, you can plan a realistic budget before the first brick is laid.' },

      { h2: 'Typical per-square-foot rates in 2026' },
      { p: 'For an independent house in and around Tambaram and southern Chennai, turnkey construction in 2026 generally falls into these bands, measured per square foot of built-up area:' },
      { table: {
        head: ['Specification', 'Approx. rate (per sq ft)', 'What it usually includes'],
        rows: [
          ['Basic', '₹1,600 – ₹2,000', 'Sound structure, standard brick or block walls, basic tiles and fittings'],
          ['Standard', '₹2,000 – ₹2,800', 'Vitrified tiles, branded plumbing and electrical items, good-quality doors and windows'],
          ['Premium', '₹2,800 – ₹4,000+', 'Granite or marble, designer fittings, modular kitchen, false ceilings, special façade work'],
        ],
      } },
      { p: 'As a rough guide, a 1,200 sq ft home at a standard specification works out to approximately ₹24–34 lakh for construction, excluding land, approvals and interiors. These are indicative market ranges, not a quote — your actual figure depends on the design, the site and the finishes you choose.' },

      { h2: 'Where the money goes' },
      { p: 'Knowing how a construction budget is typically split helps you see which decisions matter most. For a standard-specification house, the approximate share of each part is:' },
      { table: {
        head: ['Part of the work', 'Approx. share of cost'],
        rows: [
          ['Structure — foundation, columns, beams, slabs and walls', '35–40%'],
          ['Flooring and tiling', '8–12%'],
          ['Plumbing and sanitary fittings', '8–10%'],
          ['Electrical work and fittings', '8–10%'],
          ['Doors and windows', '6–8%'],
          ['Painting', '5–7%'],
          ['Waterproofing', '3–5%'],
        ],
      } },
      { p: 'The structure is the one part you cannot upgrade later, so it is the last place to economise. Finishes such as tiles, fittings and paint can be improved over time; a weak foundation or under-designed slab cannot.' },

      { h2: 'What actually drives the cost' },
      { ul: [
        'Specification and finishes — flooring, kitchen, bathrooms and joinery can swing the budget by 20% or more.',
        'Number of floors — a G+1 or G+2 needs more structural steel and a stronger foundation than a single storey.',
        'Soil and site conditions — weak or clayey soil, or a high water table, means a deeper or reinforced foundation.',
        'Plinth height — low-lying areas of Chennai often need a raised plinth to stay above flood level.',
        'Material rates — cement, steel and sand prices move with the market during the build.',
        'Design complexity — cantilevers, large spans, double-height spaces and curved walls add cost.',
      ] },
      { tip: 'Ask every builder for a per-square-foot rate AND a line-item breakdown. The breakdown is where hidden costs show up.' },

      { h2: 'Costs people often forget' },
      { p: 'A per-square-foot rate usually covers the house itself. These items are frequently quoted separately, so check whether they are in scope:' },
      { ul: [
        'Building plan approval and local body fees.',
        'Soil test and structural design charges.',
        'Electricity (TNPDCL), water and sewage connections.',
        'Underground sump, overhead tank and septic tank where needed.',
        'Compound wall, gate and driveway.',
        'Borewell and motor.',
        'Interiors — wardrobes, modular kitchen and false ceilings.',
      ] },

      { h2: 'How to plan your budget' },
      { ol: [
        'Fix your specification before you compare quotes, so every builder prices the same thing.',
        'Get an itemised quotation, not just a per-square-foot figure.',
        'Tie payments to completed milestones — foundation, each slab, plastering, finishing — rather than to dates.',
        'Keep a contingency of around 5–10% for changes and price movements.',
        'Confirm in writing what happens if material prices rise during the build.',
      ] },
      { p: 'At KN Builders, every project begins with a free site assessment and a transparent, itemised estimate — so you know exactly where your money is going before work starts.' },
    ],
    faqs: [
      { q: 'How much does it cost to build a 1,200 sq ft house in Chennai?', a: 'At a standard 2026 specification of roughly ₹2,000–₹2,800 per sq ft, a 1,200 sq ft home costs approximately ₹24–34 lakh for construction, excluding land, approvals and interiors.' },
      { q: 'Does the per-square-foot rate include materials and labour?', a: 'A turnkey rate normally includes materials, labour and supervision. Items such as approvals, utility connections, sump, compound wall, borewell and interiors are often quoted separately, so always confirm what is in and out of scope.' },
      { q: 'Which part of the construction cost is the largest?', a: 'The structure — foundation, columns, beams, slabs and walls — is usually 35–40% of the total. It is also the one part that cannot be upgraded later, so it should not be where you economise.' },
      { q: 'How can I avoid cost overruns?', a: 'Lock the specification early, insist on an itemised quote tied to a milestone payment schedule, and keep a 5–10% contingency for changes.' },
    ],
  },
  {
    slug: 'choosing-a-builder-tambaram',
    services: ['residential-construction', 'civil-structural-works'],
    tag: 'Buyer Guide',
    title: 'How to Choose the Right Builder in Tambaram',
    metaTitle: 'How to Choose a Builder in Tambaram, Chennai | KN Builders',
    metaDescription: 'The checks to make, questions to ask, contract terms to insist on and red flags to avoid before signing with a builder in Tambaram or greater Chennai.',
    date: 'May 12, 2026',
    dateISO: '2026-05-12',
    updatedISO: '2026-10-01',
    img: 'blog6',
    author: 'tamilpriya',
    excerpt: 'The checks to make, the questions to ask, the contract terms to insist on and the red flags to avoid before you sign with a builder.',
    takeaways: [
      'Visit completed projects and speak to past clients before you sign anything.',
      'A written, itemised contract with a milestone payment schedule protects both sides.',
      'Ask who designs the structure and who supervises the site day to day.',
      'Be wary of quotes far below the market rate — they usually hide lower specifications.',
    ],
    body: [
      { p: 'Choosing a builder is the most important decision you will make about your home — more important than the tiles or the paint. The right partner delivers on time, communicates clearly and stands behind their work. Here is how to find them.' },

      { h2: 'Look at completed work, not just brochures' },
      { p: 'Ask to visit completed projects and, ideally, an ongoing site. A builder confident in their quality will happily arrange it. Pay attention to finishing details such as tile joints, plaster lines and how doors close — they reveal the care taken in the parts you cannot see.' },
      { p: 'Speak to past clients if you can. Ask whether the project finished on time, whether the final bill matched the quote, and how the builder handled problems after handover.' },

      { h2: 'Verify the essentials' },
      { ul: [
        'Business registration and GST number.',
        'A portfolio of similar projects in or near your area.',
        'A qualified structural engineer for the design, and a named site engineer for supervision.',
        'Client references you can actually call.',
        'A written, itemised quotation and contract.',
        'A clear, milestone-based payment schedule.',
      ] },
      { p: 'If you are buying a flat in a larger project rather than building your own house, also check that the project is registered with TNRERA, the Tamil Nadu real estate regulator.' },

      { h2: 'Questions worth asking' },
      { ol: [
        'Who is my single point of contact during the build?',
        'Who prepares the structural design, and will I get the drawings?',
        'How often will an engineer be on site?',
        'How do you handle changes, and how are they priced?',
        'What is your typical timeline for a project like mine?',
        'How will I receive progress updates and photos?',
        'What warranty do you give after handover, and what does it cover?',
      ] },
      { tip: 'If a quote is dramatically cheaper than everyone else, ask what was left out. Price is usually a signal of specification.' },

      { h2: 'What the contract should include' },
      { ul: [
        'Full specification — brands and grades of cement, steel, tiles, fittings and paint.',
        'Drawings and the built-up area being quoted.',
        'Payment stages linked to completed work.',
        'Start date, completion date and what happens if either side causes a delay.',
        'How variations are agreed and priced — always in writing.',
        'Defect liability or warranty period after handover.',
      ] },

      { h2: 'Red flags to avoid' },
      { ul: [
        'Reluctance to put the quote or contract in writing.',
        'Demands for a large advance before work starts.',
        'No recent local work you can visit.',
        'Vague answers about timelines, materials or who will supervise.',
        'A lump-sum price with no line-item breakdown.',
      ] },
      { p: 'Trust is built on transparency. If it is missing at the quoting stage, it rarely improves once work begins.' },
    ],
    faqs: [
      { q: 'How do I verify a builder is trustworthy?', a: 'Check their business registration and GST, visit completed projects, call past clients, and insist on a written itemised contract with a milestone payment schedule.' },
      { q: 'How much advance should a builder ask for?', a: 'Payments should be tied to milestones rather than a large lump sum upfront. A modest mobilisation advance followed by stage-wise payments is standard and fair.' },
      { q: 'Why are some quotes so much cheaper?', a: 'A very low quote usually reflects lower-grade materials, thinner specifications or items excluded from scope. Always compare like-for-like line items.' },
      { q: 'What should a construction contract include?', a: 'The full specification with brands and grades, drawings, built-up area, milestone payment stages, start and completion dates, a written process for variations, and the warranty period after handover.' },
    ],
  },
  {
    slug: 'vaastu-modern-homes',
    services: ['design-and-planning', 'interior-fitout'],
    tag: 'Design',
    title: 'Balancing Vaastu With Modern Home Design',
    metaTitle: 'Vaastu and Modern Home Design in Chennai | KN Builders',
    metaDescription: 'How to follow Vaastu principles without compromising on light, ventilation, space and contemporary design when building a home in Chennai.',
    date: 'May 20, 2026',
    dateISO: '2026-05-20',
    updatedISO: '2026-10-01',
    img: 'blog5',
    author: 'priya',
    excerpt: 'How to follow Vaastu principles without compromising on light, ventilation, space and contemporary design.',
    takeaways: [
      'Vaastu and modern design are not opposites — many principles align with good climate-responsive planning.',
      'Orientation, entrance placement and room zoning matter most; settle them at the design stage.',
      'Work with an architect who treats Vaastu as a design input, not an afterthought.',
    ],
    body: [
      { p: 'Many homeowners in Chennai want a home that follows Vaastu while still feeling open, bright and contemporary. The good news: with thoughtful planning, you rarely have to choose between the two.' },

      { h2: 'Start with orientation' },
      { p: 'The direction a plot faces and where the main entrance sits are the foundations of Vaastu. Settling these early lets the architect plan room placement, ventilation and daylight around them — instead of forcing awkward compromises later.' },
      { p: 'East- and north-facing plots are often preferred, but a south- or west-facing plot can be planned just as well. The layout inside matters far more than the road the plot faces.' },

      { h2: 'Where Vaastu and good design already agree' },
      { ul: [
        'A kitchen in the south-east gets gentle morning light and good ventilation for cooking.',
        'A master bedroom in the south-west, with solid walls and fewer openings, helps buffer the strong afternoon sun.',
        'An open, uncluttered north-east welcomes soft natural light — a modern design goal too.',
        'Cross-ventilation, central to Vaastu, also keeps a home cooler in Chennai’s hot, humid climate.',
        'A light, open centre of the house (the Brahmasthan) suits courtyards and double-height living spaces.',
      ] },

      { h2: 'Common room placements' },
      { table: {
        head: ['Space', 'Usual Vaastu preference', 'Design benefit'],
        rows: [
          ['Main entrance', 'North or east', 'Welcoming, well-lit approach'],
          ['Pooja room', 'North-east', 'Calm corner with soft morning light'],
          ['Kitchen', 'South-east', 'Morning light, good ventilation'],
          ['Master bedroom', 'South-west', 'Privacy and thermal mass against afternoon heat'],
          ['Living room', 'North or east', 'Bright, open social space'],
          ['Staircase', 'South or west', 'Keeps the north-east open and light'],
        ],
      } },
      { tip: 'Treat Vaastu as one of several design inputs. When it conflicts with daylight or flow, a skilled architect finds a balanced solution rather than a rigid one.' },

      { h2: 'When the plot does not cooperate' },
      { p: 'Urban plots in Chennai are often narrow, irregular or fixed in orientation. In these cases the architect prioritises the principles that matter most to you — usually the entrance, kitchen and master bedroom — and balances the rest with light, ventilation and practical circulation.' },

      { h2: 'Keep it contemporary' },
      { p: 'You can follow these principles with clean lines, large windows, open-plan living and modern materials. Vaastu guides the layout; your taste guides the look. The result is a home that feels right in every sense.' },
    ],
    faqs: [
      { q: 'Can a modern home follow Vaastu?', a: 'Yes. Many Vaastu principles — orientation, ventilation, room zoning and an open north-east — align with good contemporary planning. The key is resolving them at the design stage.' },
      { q: 'Which Vaastu factors matter most?', a: 'Plot orientation, main entrance placement, and the zoning of the kitchen, master bedroom and pooja room have the biggest impact and are hardest to change later.' },
      { q: 'Is a south- or west-facing plot bad for Vaastu?', a: 'Not necessarily. With careful planning of the entrance and room placement, a south- or west-facing plot can follow Vaastu principles well.' },
      { q: 'Do I have to compromise on design for Vaastu?', a: 'Rarely. A skilled architect treats Vaastu as a design input and balances it with daylight, flow and aesthetics.' },
    ],
  },
  {
    slug: 'successful-construction-project-steps',
    services: ['residential-construction', 'renovation-remodeling'],
    tag: 'Project Management',
    title: '8 Essential Steps for a Successful Construction Project',
    metaTitle: '8 Steps to a Successful Construction Project | KN Builders',
    metaDescription: 'A clear, step-by-step framework that takes a house construction project in Chennai from first consultation to a smooth handover — on time and on budget.',
    date: 'June 8, 2026',
    dateISO: '2026-06-08',
    updatedISO: '2026-10-01',
    img: 'blog2',
    author: 'arjun',
    excerpt: 'A clear, step-by-step framework that takes a project from first consultation all the way to a smooth handover.',
    takeaways: [
      'Most project problems trace back to weak planning, not weak building.',
      'A milestone schedule and a single point of contact keep everyone aligned.',
      'A thorough handover checklist prevents snags from becoming long-term headaches.',
    ],
    body: [
      { p: 'A successful build is rarely luck. It is the result of a disciplined process repeated on every project. Here is the eight-step framework we follow at KN Builders, and what you should expect at each stage.' },

      { h2: 'The eight steps' },
      { ol: [
        'Consultation and site visit — understand your needs, budget and timeline, and check the plot, access and soil.',
        'Design and drawings — architectural plans, structural design and detailed working drawings.',
        'Approvals — building plan permission from the local body (in and around Tambaram, the corporation, CMDA or DTCP depending on location).',
        'Estimation and contract — a transparent, itemised quotation, a fixed specification and a milestone schedule.',
        'Foundation and structure — excavation, footings, plinth beam, columns, beams and roof slabs.',
        'Masonry and services — walls, concealed plumbing and electrical conduits, plastering and waterproofing.',
        'Finishing — flooring, doors and windows, painting, fittings and fixtures.',
        'Inspection and handover — quality check, snag list, final clean, and handing over drawings and warranties.',
      ] },

      { h2: 'Approvals in Tamil Nadu' },
      { p: 'Construction should never begin before the building plan is approved. For small residential buildings, Tamil Nadu now offers an online self-certification route that can issue a permit quickly; larger buildings follow the regular approval process. Eligibility limits have changed over time, so confirm the current rules for your plot before you plan your timeline.' },

      { h2: 'A typical timeline' },
      { p: 'For an independent G+1 house of around 1,500–2,000 sq ft, the stages usually take roughly:' },
      { table: {
        head: ['Stage', 'Typical duration'],
        rows: [
          ['Design, drawings and approvals', '1–3 months'],
          ['Foundation and structure', '3–4 months'],
          ['Masonry, services and plastering', '2–3 months'],
          ['Finishing and handover', '2–3 months'],
        ],
      } },
      { p: 'Plot conditions, design complexity, the monsoon and how quickly decisions are made all affect these figures. A milestone schedule agreed at the start gives you realistic dates for your own project.' },
      { tip: 'Insist on a milestone schedule at the start. It turns a vague “a few months” into a plan you can hold everyone to.' },

      { h2: 'Why the process matters' },
      { p: 'Each stage depends on the one before it. Skipping planning to “save time” almost always costs more later. With a clear process, a dedicated project manager and regular updates, surprises become rare and the finish line stays predictable.' },
    ],
    faqs: [
      { q: 'What are the stages of building a house?', a: 'Consultation and site visit, design and drawings, approvals, estimation and contract, foundation and structure, masonry and services, finishing, and inspection and handover.' },
      { q: 'How long does it take to build a house in Chennai?', a: 'An independent G+1 house of around 1,500–2,000 sq ft typically takes about 8–13 months from design to handover, depending on the site, design complexity, approvals and weather.' },
      { q: 'Can construction start before plan approval?', a: 'No. Work should begin only after the building plan is approved by the local body or issued through Tamil Nadu’s online self-certification route where eligible.' },
      { q: 'What is a handover checklist?', a: 'A snag list and quality check completed before handover, ensuring every item — finishes, fittings, services — is right before you move in.' },
    ],
  },
  {
    slug: 'site-safety-tips',
    services: ['civil-structural-works', 'commercial-construction'],
    tag: 'Site Safety',
    title: 'Site Safety Tips: Ensuring a Smooth Construction',
    metaTitle: 'Construction Site Safety Tips | KN Builders Chennai',
    metaDescription: 'Practical site-safety practices that protect workers, your timeline and your budget on every construction project in Chennai — including what to check when you visit.',
    date: 'June 11, 2026',
    dateISO: '2026-06-11',
    updatedISO: '2026-10-01',
    img: 'blog3',
    author: 'arjun',
    excerpt: 'Practical safety practices that protect your workers, your timeline and your budget on every site.',
    takeaways: [
      'Safety is not a cost — accidents and delays are far more expensive.',
      'PPE, housekeeping and trained supervision prevent most common incidents.',
      'The monsoon changes the risks; a good builder plans around it.',
      'A safe site is usually a well-managed, on-schedule site.',
    ],
    body: [
      { p: 'A safe construction site protects people first — and it protects your project too. Incidents cause delays, disputes and cost. Good safety practice is simply good project management.' },
      { p: 'If you are having a house built, site safety is not only the builder’s concern. As the person commissioning the work, you have a practical interest in it, and a walk around the site tells you a great deal about how well your project is being run.' },

      { h2: 'The fundamentals' },
      { ul: [
        'Personal protective equipment (PPE) — helmets, safety shoes, gloves and harnesses for work at height.',
        'Clear, tidy access routes and good housekeeping.',
        'Proper scaffolding, edge protection and safe ladders.',
        'Trained supervision and clear daily briefings.',
        'Secure storage and safe handling of materials.',
        'A first-aid kit on site and a known route to the nearest hospital.',
      ] },
      { tip: 'A clean site is a safe site. Most slips, trips and falls come down to housekeeping.' },

      { h2: 'The risks that matter most on Indian residential sites' },
      { p: 'Serious incidents on small and mid-sized building sites cluster around a short list of causes. Knowing them tells you what to look for:' },
      { ol: [
        'Falls from height — the single largest cause of serious injury. Scaffolding, edge protection at slab level and stair openings deserve the closest attention.',
        'Falling material — bricks, tools or debris dropped from an upper level onto people below, which is why access below active work should be controlled.',
        'Electrical contact — temporary site wiring is often the most improvised system on a site, and the most dangerous.',
        'Excavation collapse — deep foundation trenches in loose or waterlogged soil need shoring; this is a real risk in low-lying parts of Chennai.',
        'Manual handling injuries — the slow, cumulative kind that rarely get reported but steadily reduce a crew’s capacity.',
      ] },

      { h2: 'The monsoon changes the risk picture' },
      { p: 'Chennai’s north-east monsoon, roughly October to December, introduces hazards that are absent for most of the year — and they arrive quickly once the rain sets in:' },
      { ul: [
        'Excavations fill and trench walls soften, raising collapse risk substantially.',
        'Scaffolding boards and slab surfaces become slippery.',
        'Temporary electrical connections and standing water are a dangerous combination.',
        'Stored cement spoils, and steel left exposed begins to rust.',
        'Access routes turn to mud, which slows every material movement on site.',
      ] },
      { p: 'A builder who plans around the monsoon — completing excavation and foundations before the heaviest weeks and protecting stored material — is managing both safety and your schedule at the same time.' },

      { h2: 'What to look for when you visit your site' },
      { p: 'You do not need technical training to read a site. These signals are visible to anyone:' },
      { ul: [
        'Are workers wearing helmets and footwear, and is anyone at height using a harness?',
        'Is scaffolding properly tied and braced, or improvised from whatever was available?',
        'Are stair and slab openings guarded, or open holes anyone could step into?',
        'Is the site tidy, with materials stacked rather than scattered across walkways?',
        'Is temporary wiring run properly, or are bare joints lying in the open?',
        'Is there drinking water, shade and a clean place for the crew to eat?',
      ] },
      { p: 'That last point matters more than it appears. Sites that look after their workers tend to keep the same crew for the length of the project, and continuity of crew is one of the strongest predictors of consistent workmanship.' },

      { h2: 'Safety and schedule go together' },
      { p: 'Well-run sites tend to be both safer and faster. When access is clear, materials are organised and the team is briefed, work flows smoothly and milestones are met. Cutting corners on safety almost always costs time in the end.' },
      { p: 'The reverse is equally reliable. A chaotic site — materials everywhere, no supervision, improvised access — is rarely producing careful work out of sight. What you can see on the surface is usually a fair indication of what is being buried in the concrete.' },
    ],
    faqs: [
      { q: 'Why is site safety important?', a: 'It protects workers from harm and protects your project from the delays, disputes and costs that incidents cause. Safe sites are usually well-managed, on-schedule sites.' },
      { q: 'What basic safety measures should every site have?', a: 'PPE for all workers, good housekeeping, proper scaffolding and edge protection, trained supervision, safe material storage and handling, and a first-aid kit on site.' },
      { q: 'How does the monsoon affect construction safety in Chennai?', a: 'Rain softens trench walls, makes scaffolding and slabs slippery, creates electrical hazards around standing water and spoils stored cement. Good builders plan excavation and foundations around the heaviest weeks.' },
      { q: 'What should I check when I visit my construction site?', a: 'Look for helmets and footwear, harnesses at height, braced scaffolding, guarded openings, tidy material stacking, safe temporary wiring, and drinking water and shade for the crew.' },
    ],
  },
  {
    slug: 'technology-modern-construction',
    services: ['design-and-planning', 'civil-structural-works'],
    tag: 'Construction Trends',
    title: 'How Technology Is Transforming Modern Construction',
    metaTitle: 'How Technology Is Changing Construction | KN Builders',
    metaDescription: 'From 3D BIM models to drones and project-tracking software, here is how digital tools are making construction more transparent, accurate and predictable in 2026.',
    date: 'June 2, 2026',
    dateISO: '2026-06-02',
    updatedISO: '2026-10-01',
    img: 'blog1',
    author: 'priya',
    excerpt: 'From 3D BIM models to drones and project-tracking software, here is how digital tools are making builds more transparent and predictable.',
    takeaways: [
      'Technology reduces guesswork — it makes timelines and budgets more predictable.',
      'BIM, drones and project software are now practical on everyday projects, not just large ones.',
      'The biggest gains are fewer errors, better coordination and clearer client updates.',
      'Technology supports good execution; it never replaces it.',
    ],
    body: [
      { p: 'Construction has been slower to digitise than most industries, but the tools that have arrived are changing how projects are planned, tracked and handed over. For a homeowner, the value is not the technology itself — it is the visibility it gives you.' },

      { h2: 'BIM: designing the building before building it' },
      { p: 'Building Information Modelling (BIM) produces a three-dimensional model that carries real information about each element — not just how the building looks, but what each component is and how it relates to the rest.' },
      { p: 'The practical benefit is clash detection. Structural, plumbing and electrical layouts can be checked against each other before anyone is on site, so the beam that would have run through a window opening, or the drain line crossing a footing, is found on screen instead of during construction. Every clash resolved in the model is a delay and a variation avoided later.' },
      { tip: 'Ask to see your design in 3D before construction starts. It is far easier to say “the kitchen feels cramped” while it is still a model than after the walls are up.' },

      { h2: 'Drones and photographic progress records' },
      { p: 'Aerial and systematic photography have become routine, and they serve two purposes. The first is progress reporting — especially useful if you live away from the site or work abroad, since you can see the actual state of the build rather than relying on a description.' },
      { p: 'The second is more valuable over the long term: a permanent record of concealed work. Photographs of plumbing and electrical runs taken before plastering mean that in ten years, when a wall needs opening for a repair, someone can look up exactly what is behind it instead of guessing.' },

      { h2: 'Project management and cost-tracking software' },
      { p: 'Digital project tracking replaces the site diary and the builder’s memory with something both parties can see:' },
      { ul: [
        'Milestone schedules that show what should be happening now and what comes next.',
        'Material delivery and consumption records, tied to the stage of work.',
        'Payment stages linked to verified progress rather than to elapsed time.',
        'Photographic updates attached to each milestone.',
        'A written record of variations, so changes to scope and cost are documented as they are agreed.',
      ] },
      { p: 'That last item prevents the most common source of end-of-project disputes. Verbal changes agreed on site are remembered differently by each party months later; written ones are not.' },

      { h2: 'Materials and methods that have improved' },
      { p: 'Not every advance is digital. Several material and method changes have made a real difference to build quality:' },
      { table: {
        head: ['Development', 'What it improves'],
        rows: [
          ['Ready-mix concrete', 'Consistent, verifiable mix proportions compared with site mixing'],
          ['Modern waterproofing systems', 'Longer-lasting protection at terraces, foundations and wet areas'],
          ['AAC blocks', 'Lighter walls with better thermal insulation than solid clay brick'],
          ['Precast elements', 'Factory-controlled quality and faster on-site assembly'],
          ['Improved formwork systems', 'Better finish and alignment, with less remedial plastering needed'],
        ],
      } },

      { h2: 'What technology cannot do' },
      { p: 'It is worth being clear about the limits. No software cures concrete faster, and no drone footage makes up for reinforcement placed incorrectly or curing cut short. The fundamentals of a sound building are still material quality, correct execution and competent supervision.' },
      { p: 'Technology’s real contribution is transparency. It makes the work visible and the record permanent, which makes it far harder for corners to be cut quietly. Judge a builder on their execution first — and treat good digital practice as evidence of a well-organised team rather than a substitute for one.' },
    ],
    faqs: [
      { q: 'What is BIM in construction?', a: 'Building Information Modelling (BIM) is a 3D digital model of a project used to design and coordinate structure, plumbing and electrical work before construction — catching clashes early and reducing rework.' },
      { q: 'How does technology benefit homeowners?', a: 'It makes timelines and budgets more predictable, reduces errors, improves coordination, and provides clearer, photo-based progress updates — especially useful if you live away from the site.' },
      { q: 'Are AAC blocks better than red bricks?', a: 'AAC blocks are lighter and insulate better than solid clay bricks, which can reduce structural load and keep interiors cooler. The right choice depends on the design, budget and the builder’s experience with the material.' },
    ],
  },
]

// Reading time from the actual word count (~200 words per minute).
const WORDS_PER_MIN = 200
const textOf = (b) =>
  [b.h2, b.p, b.tip, ...(b.ul || []), ...(b.ol || []),
    ...(b.table ? [...b.table.head, ...b.table.rows.flat()] : [])].filter(Boolean).join(' ')
for (const post of POSTS) {
  const words = [post.excerpt, ...post.takeaways, ...post.body.map(textOf), ...post.faqs.flatMap((f) => [f.q, f.a])]
    .join(' ').split(/\s+/).filter(Boolean).length
  post.readTime = `${Math.max(1, Math.round(words / WORDS_PER_MIN))} min`
}

// Newest first — used by the blog listing.
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO))

export const getPost = (slug) => POSTS.find((p) => p.slug === slug)
// Related articles: prefer posts sharing the same tag, then fill from the rest.
// Keeps the "you might also like" block genuinely relevant instead of just
// returning whichever posts happen to come first in the array.
export const relatedPosts = (slug, n = 3) => {
  const current = POSTS.find((p) => p.slug === slug)
  const others = POSTS.filter((p) => p.slug !== slug)
  if (!current) return others.slice(0, n)
  const sameTag = others.filter((p) => p.tag === current.tag)
  const rest = others.filter((p) => p.tag !== current.tag)
  return [...sameTag, ...rest].slice(0, n)
}

// Posts that reference a given service slug — powers the "Guides" cross-links on
// service pages. Derived from each post's `services` field so the blog->service
// and service->blog directions stay consistent automatically.
export const postsForService = (slug, n = 3) =>
  POSTS.filter((p) => (p.services || []).includes(slug)).slice(0, n)
