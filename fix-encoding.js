const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// 1. Verify no more encoding corruption
let corrupted = 0;
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('`r`n')) {
    console.log('STILL CORRUPTED: ' + f);
    corrupted++;
  }
}
console.log('Remaining corrupted: ' + corrupted);

// 2. Check for missing catalogue.html references
const missingCatalogue = files.filter(f => {
  const c = fs.readFileSync(f, 'utf8');
  return c.includes('catalogue.html');
});
console.log('Files referencing catalogue.html: ' + missingCatalogue.length);
if (!fs.existsSync('catalogue.html')) {
  console.log('WARNING: catalogue.html does NOT exist!');
}