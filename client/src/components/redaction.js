const data = [{
    "id": 12,
    "text": "Barclays misled shareholders and the public about one of the biggest investments in the bank's history, a BBC Panorama investigation has found.The bank announced in 2008 that Manchester City owner Sheikh Mansour had agreed to invest more than £3bn. The mo",
    "keywords": [{
            "id": 7,
            "keywords_name": "Barclays",
            "toothless_id": 12
        },
        {
            "id": 8,
            "keywords_name": "BBC Panarama",
            "toothless_id": 12
        },
        {
            "id": 9,
            "keywords_name": "Manchester",
            "toothless_id": 12
        },
        {
            "id": 10,
            "keywords_name": "Sheikh Mansour",
            "toothless_id": 12
        },
        {
            "id": 11,
            "keywords_name": "Abu Dhabi",
            "toothless_id": 12
        },
        {
            "id": 12,
            "keywords_name": "RBS",
            "toothless_id": 12
        },
        {
            "id": 13,
            "keywords_name": "Lloyds TSB",
            "toothless_id": 12
        },
        {
            "id": 14,
            "keywords_name": "Qatar",
            "toothless_id": 12
        },
        {
            "id": 15,
            "keywords_name": "Abu Dhabi",
            "toothless_id": 12
        }
    ]
},
{
    "id": 14
}
];


const words = (k) => {
    const keywordValues = Object.values(keywords)
    let keys1 =[ ...keywordValues.keys() ];

    const keys = k.map((item) => { return item["keywords"]})
    console.log(keys);
}

words (data);