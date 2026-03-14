#!/usr/bin/env python3
"""
md_to_js.py — konwertuje plik .md na data-<nazwa>.js dla StudyHub
Użycie: python3 md_to_js.py moja-notatka.md
Wynik:  notes/data-moja-notatka.js
"""
import sys, json, os, re

if len(sys.argv) < 2:
    print("Użycie: python3 md_to_js.py plik.md [tytuł opcjonalny]")
    sys.exit(1)

md_path = sys.argv[1]
title   = sys.argv[2] if len(sys.argv) > 2 else None

if not os.path.exists(md_path):
    print(f"Błąd: plik '{md_path}' nie istnieje.")
    sys.exit(1)

with open(md_path, 'r', encoding='utf-8') as f:
    content = f.read()

# ID z nazwy pliku
basename = os.path.basename(md_path)
note_id  = re.sub(r'\.md$', '', basename, flags=re.IGNORECASE)
note_id  = re.sub(r'[^a-zA-Z0-9_-]', '-', note_id).lower().strip('-')

# Tytuł: z parametru lub z pierwszego nagłówka w pliku
if not title:
    m = re.search(r'^#{1,3}\s+(.+)', content, re.MULTILINE)
    title = m.group(1).strip() if m else note_id

out_dir  = os.path.join(os.path.dirname(os.path.abspath(md_path)), 'notes')
out_file = os.path.join(out_dir, f'data-{note_id}.js')

os.makedirs(out_dir, exist_ok=True)

js_content = f"""window.NOTE_DATA = {{
  title: {json.dumps(title)},
  content: {json.dumps(content)}
}};
"""

with open(out_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✓ Wygenerowano: {out_file}")
print(f"  id:    {note_id}")
print(f"  tytuł: {title}")
print()
print(f"Dodaj do assets/js/config.js → notes:")
print(f'  {{ id: \'{note_id}\', name: \'{title}\', emoji: \'📝\', desc: \'Opis notatki.\' }},')
