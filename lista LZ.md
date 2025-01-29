---
title: 
draft: false
tags: 
aliases:
---
> [!abstract]- antet  
> context::  
> data:: 2025.01.29  
> ora:: 22:22  
> conexiuni::  
> DDC::  
> ZK-prefix::  FZ
> ZettelkastenCode::  
> sursa::  
> tags::  


---
# componente externe


---


# Zettelkasten: LiteraturZettel (LZ) - clustere de coduri folosite
*(list of the codes for the LiteraturZettel reserved in "clusters", i.e. notes about the same referenced literary source, the same title)*

```dataview
TABLE WITHOUT ID key as "Code Cluster", 
rows[0].file.link as "Cluster Key Node"
FROM ""
WHERE ZettelkastenCode != null AND ZK-prefix = "LZ" AND regexmatch("^\\w{5}-000$", ZettelkastenCode)
GROUP BY substring(ZettelkastenCode, 0, 5) as key
```

# Zettelkasten: LiteraturZettel - lista codurilor folosite
*(notes that have the LZ prefix defined; otherwise, the notes are not fully and legitimately recorded, and are listed below, at [[#Zettelkasten codes in use, no prefix]])*

```dataview
table ZettelkastenCode as "Zettelkasten Code"
from ""
where ZettelkastenCode != null and ZK-prefix = "LZ"
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


