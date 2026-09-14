import fs from 'node:fs';

const title = process.argv[2];
const slug = title.toLowerCase().replace(/\s+/g, '-');
const today = new Date().toISOString().split('T')[0];

const content = `---
title: "${title}"
pubDate: ${today}
description: ""
---

`;

fs.writeFileSync(`src/content/blog/${slug}.md`, content);
console.log(`Post creado: src/content/blog/${slug}.md`);