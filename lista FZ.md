---
title: 
draft: false
tags: 
aliases:
---
> [!abstract]- antet  
> context::  
> data:: 2025.01.29  
> ora:: 20:26  
> conexiuni::  
> DDC::  
> ZK-prefix::  FZ
> ZettelkastenCode::  
> sursa::  
> tags::  


---
# componente externe


---

# Zettelkasten: FolgeZettel (FZ) - clustere de coduri folosite
*(lista codurilor FolgeZettel rezervate în clustere tematice)*

```dataview
TABLE WITHOUT ID key as "codul-cluster", 
rows[0].file.link as "nod-cheie în cluster"
FROM ""
WHERE ZettelkastenCode != null AND ZK-prefix = "FZ" AND regexmatch("^\\w{4}-000$", ZettelkastenCode)
GROUP BY substring(ZettelkastenCode, 0, 4) as key
```

# Zettelkasten: FolgeZettel (FZ) - lista codurilor folosite
*(that also have the LZ prefix defined; otherwise, the notes are not legitimately recorded)*

```dataview
TABLE WITHOUT ID file.link as "nota",
ZettelkastenCode as "codul Zettelkasten"
from ""
where ZettelkastenCode != null and ZK-prefix = "FZ"
sort ZettelkastenCode asc
```

# Zettelkasten: coduri folosite fără categorie (prefix)

```dataview
table ZettelkastenCode as "Zettelkasten Code"
from ""
where ZettelkastenCode != null
and
ZK-prefix = null
sort ZettelkastenCode asc
```
 



---
# subsolul notei
---
## referințe și resurse


---
## note de subsol
---


