export const config = {
    "default_structure": [
        {
            "label": "Sequence Domains",
            "id": "sequence_domains",
            "summary": ["pfam"],
            "contents": [
                {
                    "label": "Pfam",
                    "id": "pfam",
                    "key": "Pfam",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/pfam/",
                    "layout": "overlapping"
                },
                {
                    "label": "Rfam",
                    "id": "rfam",
                    "key": "Rfam",
                    "api": "https://wwwdev.ebi.ac.uk/pdbe/api/nucleic_mappings/rfam/",
                    "layout": "non-overlapping"
                }
            ]
        },
        {
            "label": "Structural Domains",
            "id": "structural_domain",
            "summary": ["cath"],
            "contents": [
                {
                    "label": "CATH",
                    "id": "cath",
                    "key": "CATH",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/",
                    "layout": "overlapping"
                },
                {
                    "label": "SCOP",
                    "id": "scop",
                    "key": "SCOP",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/scop/",
                    "layout": "overlapping"
                }
            ]
        },
        {
            "label": "Structural Features",
            "id": "structural_features",
            "summary": ["helix", "strand"],
            "contents": [
                {
                    "label": "Helices",
                    "id": "helix",
                    "key": "helices",
                    "api": "https://www.ebi.ac.uk/pdbe/api/pdb/entry/secondary_structure/",
                    "layout": "overlapping"
                },
                {
                    "label": "Strands",
                    "id": "strand",
                    "key": "strands",
                    "api": "https://www.ebi.ac.uk/pdbe/api/pdb/entry/secondary_structure/",
                    "layout": "overlapping"
                }
            ]
        },
        {
            "label": "Binding Sites",
            "id": "binding_sites",
            "summary": ["ligand_residues", "site_residues"],
            "contents": [
                {
                    "label": "Ligand",
                    "id": "ligand",
                    "key": "ligand_residues",
                    "api": "https://www.ebi.ac.uk/pdbe/api/pdb/entry/binding_sites/",
                    "layout": "overlapping"
                },
                {
                    "label": "Site Residues",
                    "id": "site_residues",
                    "key": "site_residues",
                    "api": "https://www.ebi.ac.uk/pdbe/api/pdb/entry/binding_sites/",
                    "layout": "overlapping"
                }
            ]
        },
        {
            "label": "Quality",
            "id": "quality",
            "summary": ["quality"],
            "contents": [
                {
                    "label": "Quality",
                    "id": "quality",
                    "key": "Quality",
                    "api": "https://www.ebi.ac.uk/pdbe/api/validation/residuewise_outlier_summary/entry/",
                    "layout": "overlapping",
                    "skip": "true"
                },
                {
                    "label": "RSRZ",
                    "id": "rsrz",
                    "key": "RSRZ",
                    "api": "https://www.ebi.ac.uk/pdbe/api/validation/residuewise_outlier_summary/entry/",
                    "layout": "overlapping"
                },
                {
                    "label": "Ramachandran Outliers",
                    "id": "rc_outliers",
                    "key": "ramachandran_outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/validation/residuewise_outlier_summary/entry/",
                    "layout": "overlapping"
                },
                {
                    "label": "Sidechain Outliers",
                    "id": "sidechain_outliers",
                    "key": "sidechain_outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/validation/residuewise_outlier_summary/entry/",
                    "layout": "overlapping"
                },
                {
                    "label": "Clashes",
                    "id": "clashes",
                    "key": "clashes",
                    "api": "https://www.ebi.ac.uk/pdbe/api/validation/residuewise_outlier_summary/entry/",
                    "layout": "overlapping"
                }
            ]
        }
    ],
    "default_structure_backup": [
        {
            "label": "Structural Domains",
            "id": "structural_domain",
            "type": "multi",
            "summary": ["cath"],
            "contents": [
                {
                    "label": "CATH",
                    "id": "cath",
                    "type": "single",
                    "key": "CATH",
                    "adapter": "DomainsAdapter",
                    "resultMap": "mappings",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "SCOP",
                    "id": "scop",
                    "type": "single",
                    "key": "SCOP",
                    "adapter": "DomainsAdapter",
                    "resultMap": "mappings",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/scop/"
                }
            ]
        },
        {
            "label": "Sequence Domains",
            "id": "sequence_domains",
            "type": "multi",
            "summary": ["uniprot"],
            "contents": [
                {
                    "label": "UniProt",
                    "id": "uniprot",
                    "type": "single",
                    "key": "UniProt",
                    "adapter": "DomainsAdapter",
                    "resultMap": "mappings",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/uniprot/"
                },
                {
                    "label": "Pfam",
                    "id": "pfam",
                    "type": "single",
                    "key": "Pfam",
                    "adapter": "DomainsAdapter",
                    "resultMap": "mappings",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/pfam/"
                },
                {
                    "label": "Rfam",
                    "id": "rfam",
                    "type": "single",
                    "key": "Rfam",
                    "adapter": "DomainsAdapter",
                    "resultMap": "rfam",
                    "overlap": "false",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                }
            ]
        },
        {
            "label": "Binding Sites",
            "id": "binding_sites",
            "type": "multi",
            "summary": ["ligand_residues", "site_residues"],
            "contents": [
                {
                    "label": "Ligand",
                    "id": "ligand",
                    "type": "single",
                    "key": "ligand_residues",
                    "adapter": "BindingSitesAdapter",
                    "resultMap": "bindingSites",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "Site Residues",
                    "id": "site_residues",
                    "type": "single",
                    "key": "site_residues",
                    "adapter": "BindingSitesAdapter",
                    "resultMap": "bindingSites",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                }
            ]
        },
        {
            "label": "Structural Features",
            "id": "structural_features",
            "type": "multi",
            "summary": ["helix", "strand"],
            "contents": [
                {
                    "label": "Helices",
                    "id": "helix",
                    "type": "single",
                    "key": "helices",
                    "adapter": "FeaturesAdapter",
                    "resultMap": "secStrutures",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "Strands",
                    "id": "strand",
                    "type": "single",
                    "key": "strands",
                    "adapter": "FeaturesAdapter",
                    "resultMap": "secStrutures",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                }
            ]
        },
        {
            "label": "Quality",
            "id": "quality",
            "type": "multi",
            "summary": [],
            "adapter": "QualitySummaryAdapter",
            "contents": [
                {
                    "label": "RSRZ",
                    "id": "rsrz",
                    "type": "single",
                    "key": "RSRZ",
                    "adapter": "QualityAdapter",
                    "resultMap": "outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "Ramachandran Outliers",
                    "id": "rc_outliers",
                    "type": "single",
                    "key": "ramachandran_outliers",
                    "adapter": "QualityAdapter",
                    "resultMap": "outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "Sidechain Outliers",
                    "id": "sidechain_outliers",
                    "type": "single",
                    "key": "sidechain_outliers",
                    "adapter": "QualityAdapter",
                    "resultMap": "outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                },
                {
                    "label": "Clashes",
                    "id": "clashes",
                    "type": "single",
                    "key": "clashes",
                    "adapter": "QualityAdapter",
                    "resultMap": "outliers",
                    "api": "https://www.ebi.ac.uk/pdbe/api/mappings/cath/"
                }
            ]
        }
    ],
    "data-mapping": {

    },
    "service": {
        "molecule": ["entities", "modifiedResidues", "mutatedResidues"],
        "cath": ["mappings", "entities"],
        "uniprot": ["mappings", "entities"],
        "pfam": ["mappings", "entities"],
        "interpro": ["mappings", "entities"],
        "scop": ["mappings", "entities"],
        "ensembl": ["mappings", "entities"],
        "helix": ["secStrutures"],
        "strand": ["secStrutures"],
        "rsrz": ["outliers"],
        "rc_outliers": ["outliers"],
        "sidechain_outliers": ["outliers"],
        "clashes": ["outliers"],
        "site_residues": ["bindingSites"],
        "ligand": ["bindingSites"],
        "rfam": ["rfam"]
    },
    "color_code": {
        "molecule": "rgb(150, 150, 150)",
        "mutated": "rgb(255, 121, 0)",
        "modified": "rgb(255, 121, 0)",
        "pfam": "rgb(141, 151, 195)",
        "cath": "rgb(81, 164, 245)",
        "uniprot": "rgb(162, 102, 147)",
        "scop": "rgb(0, 115, 84)",
        "interpro": "rgb(81, 164, 245)",
        "helix": "rgb(148, 131, 42)",
        "strand": "rgb(132, 197, 240)",
        "quality-0": "rgb(0, 182, 0)",
        "quality-1": "rgb(255, 255, 75)",
        "quality-2": "rgb(255, 121, 0)",
        "quality-3": "rgb(255, 0, 0)",
        "ligand": "rgb(0, 94, 52)",
        "site_residues": "rgb(0, 190, 0)",
        "rfam": "rgb(190, 190, 30)"
    }
}