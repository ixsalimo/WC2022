// Declare constant variables
const $ = document ,
_id = id => $.getElementById(id) ,
_qs = qs => $.querySelector(qs) ,
_qsa = qs => $.querySelectorAll(qs);

// Highlights Resourse => https://www.fifa.com/fifaplus/en/cat/17boYmDl4aQhogvFXSovp5

const Teams = [
    {
        ISO: 'NL',
        name: 'NETHERLANDS',
        faName: 'هلند',
        group: 'A',
        MP: 3,
        W: 2,
        D: 1,
        L: 0,
        GF: 5,
        GA: 1,
        GD: 4,
        PTS: 7,
        L3: ['w','d','w'],
        lastMatches: [
            {
                teamISO: 'SN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3"
            },
            {
                teamISO: 'EC',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4KjYBbKEaqyNdutdfpyYaZ"
            },
            {
                teamISO: 'QA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5PSEpirzkfa7TgjPxj3K4E"
            },
            {
                teamISO: 'US',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5XHGn2t9YobJ1GAFZKMDAT"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/66evf9qAjJh9fF7GeYBmtd"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'SN',
        name: 'SENEGAL',
        faName: 'سنگال',
        group: 'A',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 5,
        GA: 4,
        GD: 1,
        PTS: 6,
        L3: ['w','w','l'],
        lastMatches: [
            {
                teamISO: 'NL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3"
            },
            {
                teamISO: 'QA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3rkJRLJHm5piA5nfErMA3k"
            },
            {
                teamISO: 'EC',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4i8HAhyuvDcFZxYJZQA5o9"
            },
            {
                teamISO: 'US',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1KduI591JSXhLPnU99xpiO"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'EC',
        name: 'ECUADOR',
        faName: 'اکوادور',
        group: 'A',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 4,
        GA: 3,
        GD: 1,
        PTS: 4,
        L3: ['l','d','w'],
        lastMatches: [
            {
                teamISO: 'QA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ"
            },
            {
                teamISO: 'NL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4KjYBbKEaqyNdutdfpyYaZ"
            },
            {
                teamISO: 'SN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4i8HAhyuvDcFZxYJZQA5o9"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'QA',
        name: 'QATAR',
        faName: 'قطر',
        group: 'A',
        MP: 3,
        W: 0,
        D: 0,
        L: 3,
        GF: 1,
        GA: 7,
        GD: -6,
        PTS: 0,
        L3: ['l','l','l'],
        lastMatches: [
            {
                teamISO: 'EC',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ"
            },
            {
                teamISO: 'SN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3rkJRLJHm5piA5nfErMA3k"
            },
            {
                teamISO: 'NL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5PSEpirzkfa7TgjPxj3K4E"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'ENG',
        name: 'ENGLAND',
        faName: 'انگلستان',
        group: 'B',
        MP: 3,
        W: 2,
        D: 1,
        L: 0,
        GF: 9,
        GA: 2,
        GD: 7,
        PTS: 7,
        L3: ['w','d','w'],
        lastMatches: [
            {
                teamISO: 'IR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV"
            },
            {
                teamISO: 'US',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2J6ih5nCaP2l4k6yXEfRx"
            },
            {
                teamISO: 'GB',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/63N4QLt0BNz5Xuj40n01zK"
            },
            {
                teamISO: 'SN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1KduI591JSXhLPnU99xpiO"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/783zSqR6RRJrx6UiakMYc4"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'US',
        name: 'UNITED STATES',
        faName: 'ایالت متحده آمریکا',
        group: 'B',
        MP: 3,
        W: 1,
        D: 2,
        L: 0,
        GF: 2,
        GA: 1,
        GD: 1,
        PTS: 5,
        L3: ['w','d','d'],
        lastMatches: [
            {
                teamISO: 'GB',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8"
            },
            {
                teamISO: 'ENG',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2J6ih5nCaP2l4k6yXEfRx"
            },
            {
                teamISO: 'IR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6ssnUCant3LxkpTqHK8wJI"
            },
            {
                teamISO: 'NL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5XHGn2t9YobJ1GAFZKMDAT"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'IR',
        name: 'ISLAMIC REPUBLIC OF IRAN',
        faName: 'جمهوری اسلامی ایران',
        group: 'B',
        MP: 3,
        W: 1,
        D: 0,
        L: 2,
        GF: 4,
        GA: 7,
        GD: -3,
        PTS: 3,
        L3: ['l','w','l'],
        lastMatches: [
            {
                teamISO: 'ENG',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV"
            },
            {
                teamISO: 'GB',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6gxbAVuBi54vC5DYMG0opA"
            },
            {
                teamISO: 'US',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6ssnUCant3LxkpTqHK8wJI"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'GB',
        name: 'WALES',
        faName: 'ولز',
        group: 'B',
        MP: 3,
        W: 0,
        D: 1,
        L: 2,
        GF: 1,
        GA: 6,
        GD: -5,
        PTS: 1,
        L3: ['l','l','d'],
        lastMatches: [
            {
                teamISO: 'US',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8"
            },
            {
                teamISO: 'IR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6gxbAVuBi54vC5DYMG0opA"
            },
            {
                teamISO: 'ENG',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/63N4QLt0BNz5Xuj40n01zK"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'AR',
        name: 'ARGENTINA',
        faName: 'آرژانتین',
        group: 'C',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 5,
        GA: 2,
        GD: 3,
        PTS: 6,
        L3: ['w','w','l'],
        lastMatches: [
            {
                teamISO: 'SA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg"
            },
            {
                teamISO: 'MX',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2v4Kywu376wjM1NWZssi92"
            },
            {
                teamISO: 'PL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2uTpzYqmyXxgrjbThfuHs8"
            },
            {
                teamISO: 'AU',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5hQ8DJM14tBciQZrOqq1hR"
            },
            {
                teamISO: 'NL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/66evf9qAjJh9fF7GeYBmtd"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5t0hwOhuPS6LKAJD33IQym"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/63XwuAOoqYgNW0Q3E9PxJG"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'PL',
        name: 'POLAND',
        faName: 'لهستان',
        group: 'C',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 2,
        GA: 2,
        GD: 0,
        PTS: 4,
        L3: ['l','w','d'],
        lastMatches: [
            {
                teamISO: 'MX',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu"
            },
            {
                teamISO: 'SA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4N5aGjb70DM5O4GokhMyB5"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2uTpzYqmyXxgrjbThfuHs8"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/64SmxbyL5NcHO462P6j10t"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'MX',
        name: 'MEXICO',
        faName: 'مکزیک',
        group: 'C',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 2,
        GA: 3,
        GD: -1,
        PTS: 4,
        L3: ['w','l','d'],
        lastMatches: [
            {
                teamISO: 'PL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2v4Kywu376wjM1NWZssi92"
            },
            {
                teamISO: 'SA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6verwbedF0SrmT4NhDH0Of"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'SA',
        name: 'SAUDI ARABIA',
        faName: 'عربستان سعودی',
        group: 'C',
        MP: 3,
        W: 1,
        D: 0,
        L: 2,
        GF: 3,
        GA: 5,
        GD: -2,
        PTS: 3,
        L3: ['l','l','w'],
        lastMatches: [
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg"
            },
            {
                teamISO: 'PL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4N5aGjb70DM5O4GokhMyB5"
            },
            {
                teamISO: 'MX',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6verwbedF0SrmT4NhDH0Of"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'FR',
        name: 'FRANCE',
        faName: 'فرانسه',
        group: 'D',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 6,
        GA: 3,
        GD: 3,
        PTS: 6,
        L3: ['l','w','w'],
        lastMatches: [
            {
                teamISO: 'AU',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF"
            },
            {
                teamISO: 'DK',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1gLQObDpWTDJ3SoTp9EMp5"
            },
            {
                teamISO: 'TN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/617bwDDuw2JVmo86lNJKC0"
            },
            {
                teamISO: 'PL',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/64SmxbyL5NcHO462P6j10t"
            },
            {
                teamISO: 'ENG',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/783zSqR6RRJrx6UiakMYc4"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7HxpGAqmze4vGWm6dxD3tz"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/63XwuAOoqYgNW0Q3E9PxJG"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'AU',
        name: 'AUSTRALIA',
        faName: 'استرالیا',
        group: 'D',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 3,
        GA: 4,
        GD: -1,
        PTS: 6,
        L3: ['w','w','l'],
        lastMatches: [
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF"
            },
            {
                teamISO: 'TN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4DhEtG4tAmMlBpJdZ6Jjmw"
            },
            {
                teamISO: 'DK',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/49Qrop8RMmusZypBZexZ9s"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5hQ8DJM14tBciQZrOqq1hR"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'TN',
        name: 'TUNISIA',
        faName: 'تونس',
        group: 'D',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 1,
        GA: 1,
        GD: 0,
        PTS: 4,
        L3: ['w','l','d'],
        lastMatches: [
            {
                teamISO: 'DK',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM"
            },
            {
                teamISO: 'AU',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4DhEtG4tAmMlBpJdZ6Jjmw"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/617bwDDuw2JVmo86lNJKC0"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'DK',
        name: 'DENMARk',
        faName: 'دانمارک',
        group: 'D',
        MP: 3,
        W: 0,
        D: 1,
        L: 2,
        GF: 1,
        GA: 3,
        GD: -2,
        PTS: 1,
        L3: ['l','l','d'],
        lastMatches: [
            {
                teamISO: 'TN',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1gLQObDpWTDJ3SoTp9EMp5"
            },
            {
                teamISO: 'AU',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/49Qrop8RMmusZypBZexZ9s"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'JP',
        name: 'JAPAN',
        faName: 'ژاپن',
        group: 'E',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 4,
        GA: 3,
        GD: 1,
        PTS: 6,
        L3: ['w','l','w'],
        lastMatches: [
            {
                teamISO: 'DE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/25s19L79bTx5NPTqdNdRuJ"
            },
            {
                teamISO: 'CR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6DcvUVL3mMMPgqPvH2ylyZ"
            },
            {
                teamISO: 'ES',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6aotAd7chcYlldGATxZsKB"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/24omCQte8BW85haAm9hFut"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'ES',
        name: 'SPAIN',
        faName: 'اسپانیا',
        group: 'E',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 9,
        GA: 3,
        GD: 6,
        PTS: 4,
        L3: ['l','d','w'],
        lastMatches: [
            {
                teamISO: 'CR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4B5PE6zLJHWnp5M5QVLQIZ"
            },
            {
                teamISO: 'DE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7hnoWgOU9tZgt2tpEtoKII"
            },
            {
                teamISO: 'JP',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6aotAd7chcYlldGATxZsKB"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2ZqLZ2FFPV6urFL8A9fIBl"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'DE',
        name: 'GERMANY',
        faName: 'آلمان',
        group: 'E',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 6,
        GA: 5,
        GD: 1,
        PTS: 4,
        L3: ['w','d','l'],
        lastMatches: [
            {
                teamISO: 'JP',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/25s19L79bTx5NPTqdNdRuJ"
            },
            {
                teamISO: 'ES',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7hnoWgOU9tZgt2tpEtoKII"
            },
            {
                teamISO: 'CR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4F9MvEtC1AQ5EUK8GfuE7c"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'CR',
        name: 'COSTA RICA',
        faName: 'کاستاریکا',
        group: 'E',
        MP: 3,
        W: 1,
        D: 0,
        L: 2,
        GF: 3,
        GA: 11,
        GD: -8,
        PTS: 3,
        L3: ['l','w','l'],
        lastMatches: [
            {
                teamISO: 'ES',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4B5PE6zLJHWnp5M5QVLQIZ"
            },
            {
                teamISO: 'JP',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6DcvUVL3mMMPgqPvH2ylyZ"
            },
            {
                teamISO: 'DE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4F9MvEtC1AQ5EUK8GfuE7c"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'MA',
        name: 'MOROCCO',
        faName: 'مراکش',
        group: 'F',
        MP: 3,
        W: 2,
        D: 1,
        L: 0,
        GF: 4,
        GA: 1,
        GD: 3,
        PTS: 7,
        L3: ['w','w','d'],
        lastMatches: [
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2O82PCHjMKnT6VU9XcfwHk"
            },
            {
                teamISO: 'BE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6JMVy762d1IzYHzM8hFHIE"
            },
            {
                teamISO: 'CA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3LSU3XP8dlZkOve2bg61rE"
            },
            {
                teamISO: 'ES',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2ZqLZ2FFPV6urFL8A9fIBl"
            },
            {
                teamISO: 'PT',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4se3MdPEAeiq5n0e9eT14w"
            },
            {
                teamISO: 'FR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7HxpGAqmze4vGWm6dxD3tz"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5BAGunqVa9YUoPdZxI8MTm"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'HR',
        name: 'CROATIA',
        faName: 'کرواسی',
        group: 'F',
        MP: 3,
        W: 1,
        D: 2,
        L: 0,
        GF: 4,
        GA: 1,
        GD: 3,
        PTS: 5,
        L3: ['d','w','d'],
        lastMatches: [
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/2O82PCHjMKnT6VU9XcfwHk"
            },
            {
                teamISO: 'CA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/70u96PRLADGUYkTQbhU0xu"
            },
            {
                teamISO: 'BE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/roJqCEwj8vnE7YFIRpP0z"
            },
            {
                teamISO: 'JP',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/24omCQte8BW85haAm9hFut"
            },
            {
                teamISO: 'BR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7Banu6D0k8OnqDT9iVyQ8x"
            },
            {
                teamISO: 'AR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5t0hwOhuPS6LKAJD33IQym"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/5BAGunqVa9YUoPdZxI8MTm"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'BE',
        name: 'BELGIUM',
        faName: 'بلژیک',
        group: 'F',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 1,
        GA: 2,
        GD: -1,
        PTS: 4,
        L3: ['d','l','w'],
        lastMatches: [
            {
                teamISO: 'CA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1OhKHQq1ygr19Cn617rb2D"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6JMVy762d1IzYHzM8hFHIE"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/roJqCEwj8vnE7YFIRpP0z"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'CA',
        name: 'CANADA',
        faName: 'کانادا',
        group: 'F',
        MP: 3,
        W: 0,
        D: 0,
        L: 3,
        GF: 2,
        GA: 7,
        GD: -5,
        PTS: 0,
        L3: ['l','l','l'],
        lastMatches: [
            {
                teamISO: 'BE',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1OhKHQq1ygr19Cn617rb2D"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/70u96PRLADGUYkTQbhU0xu"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/3LSU3XP8dlZkOve2bg61rE"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'BR',
        name: 'BRAZIL',
        faName: 'برزیل',
        group: 'G',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 3,
        GA: 1,
        GD: 2,
        PTS: 6,
        L3: ['l','w','w'],
        lastMatches: [
            {
                teamISO: 'RS',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1uxqiACRkfkdv3Iw5XVSvP"
            },
            {
                teamISO: 'CH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7zzdOdEfb0YBZOLJ4OGsOE"
            },
            {
                teamISO: 'CM',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6F4UYjMkwi9kMmx5ISh1j1"
            },
            {
                teamISO: 'KR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6J1vG4ELULSQz0YSIQIQGz"
            },
            {
                teamISO: 'HR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7Banu6D0k8OnqDT9iVyQ8x"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'CH',
        name: 'SWITZERLAND',
        faName: 'سوئیس',
        group: 'G',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 4,
        GA: 3,
        GD: 1,
        PTS: 6,
        L3: ['w','l','w'],
        lastMatches: [
            {
                teamISO: 'CM',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6AtFcveidIrUbxRASo4J0G"
            },
            {
                teamISO: 'BR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/7zzdOdEfb0YBZOLJ4OGsOE"
            },
            {
                teamISO: 'RS',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4tOIQ1C6UD18aMMz4kJt6t"
            },
            {
                teamISO: 'PT',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6yY38lFnzDNgPLLOfh4V1r"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'CM',
        name: 'CAMEROON',
        faName: 'کامرون',
        group: 'G',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 4,
        GA: 4,
        GD: 0,
        PTS: 4,
        L3: ['w','d','l'],
        lastMatches: [
            {
                teamISO: 'CH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6AtFcveidIrUbxRASo4J0G"
            },
            {
                teamISO: 'RS',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6vc3floGRGFqCuYiLYcIv1"
            },
            {
                teamISO: 'BR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6F4UYjMkwi9kMmx5ISh1j1"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'RS',
        name: 'SERBIA',
        faName: 'صربستان',
        group: 'G',
        MP: 3,
        W: 0,
        D: 1,
        L: 2,
        GF: 5,
        GA: 8,
        GD: -3,
        PTS: 1,
        L3: ['l','d','l'],
        lastMatches: [
            {
                teamISO: 'BR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1uxqiACRkfkdv3Iw5XVSvP"
            },
            {
                teamISO: 'CM',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6vc3floGRGFqCuYiLYcIv1"
            },
            {
                teamISO: 'CH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4tOIQ1C6UD18aMMz4kJt6t"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'PT',
        name: 'PORTUGAL',
        faName: 'پرتغال',
        group: 'H',
        MP: 3,
        W: 2,
        D: 0,
        L: 1,
        GF: 6,
        GA: 4,
        GD: 2,
        PTS: 6,
        L3: ['l','w','w'],
        lastMatches: [
            {
                teamISO: 'GH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1abAi3NllBGQ1Q92mXqDWq"
            },
            {
                teamISO: 'UY',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/71l4VxdFkXEj3PvMiiTIkz"
            },
            {
                teamISO: 'KR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1wjjV5kxwpSHRjeEkxidIC"
            },
            {
                teamISO: 'CH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6yY38lFnzDNgPLLOfh4V1r"
            },
            {
                teamISO: 'MA',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4se3MdPEAeiq5n0e9eT14w"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'KR',
        name: 'SOUTH KOREA',
        faName: 'کره جنوبی',
        group: 'H',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 4,
        GA: 4,
        GD: 0,
        PTS: 4,
        L3: ['w','l','d'],
        lastMatches: [
            {
                teamISO: 'UY',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4ABRMLDcJYi670lK2uIbaS"
            },
            {
                teamISO: 'GH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1EQcCW6cT5LMz4GwHFa4sF"
            },
            {
                teamISO: 'PT',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1wjjV5kxwpSHRjeEkxidIC"
            },
            {
                teamISO: 'BR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/6J1vG4ELULSQz0YSIQIQGz"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'UY',
        name: 'URUGUAY',
        faName: 'اروگوئه',
        group: 'H',
        MP: 3,
        W: 1,
        D: 1,
        L: 1,
        GF: 2,
        GA: 2,
        GD: 0,
        PTS: 4,
        L3: ['w','l','d'],
        lastMatches: [
            {
                teamISO: 'KR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/4ABRMLDcJYi670lK2uIbaS"
            },
            {
                teamISO: 'PT',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/71l4VxdFkXEj3PvMiiTIkz"
            },
            {
                teamISO: 'GH',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/481dbDcqSHoBkJkYS0IXag"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    },
    {
        ISO: 'GH',
        name: 'GHANA',
        faName: 'غنا',
        group: 'H',
        MP: 3,
        W: 1,
        D: 0,
        L: 2,
        GF: 5,
        GA: 7,
        GD: -2,
        PTS: 3,
        L3: ['l','w','l'],
        lastMatches: [
            {
                teamISO: 'PT',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1abAi3NllBGQ1Q92mXqDWq"
            },
            {
                teamISO: 'KR',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/1EQcCW6cT5LMz4GwHFa4sF"
            },
            {
                teamISO: 'UY',
                highlightURL: "https://www.fifa.com/fifaplus/en/watch/481dbDcqSHoBkJkYS0IXag"
            }
        ],
        getImageURL () {
            // return (`${location.origin}/Pic/Flags/${this.ISO.toLowerCase()}.png`);
            return (`../Pic/Flags/${this.ISO.toLowerCase()}.png`);
        },
        getAudioURL () {
            return (`../Audio/NA/${this.ISO.toLowerCase()}.mp3`);
        }
    }
];

var params = new URLSearchParams(location.search) , 
ISOcode = params.get('ISO') , TeamImageURL , TeamName , text , itemClass , SameGroupFragment = $.createDocumentFragment() , link , image , title , highlightTeam , opponentTeam;

const Team = Teams.find(team => team.ISO == ISOcode);

if (Team) {
    const Title = _qs("title") , TeamTitle = _qs("main h1.team-title") , TeamFlag = _qs("main img.team-flag") , DownloadBtn = _id("download-btn") , TeamsStatsGroup = _qs(".team-stats__group") ,
    TeamsStatsMP = _qs(".team-stats__MP") , TeamsStatsW = _qs(".team-stats__W") , TeamsStatsD = _qs(".team-stats__D") , TeamsStatsL = _qs(".team-stats__L") , TeamsStatsGF = _qs(".team-stats__GF") ,
    TeamsStatsGA = _qs(".team-stats__GA") , TeamsStatsGD = _qs(".team-stats__GD") , TeamsStatsPTS = _qs(".team-stats__PTS") , TeamsLast3 = _qs(".team-last3") , TeamsNA = _id("team-NA") ,
    TeamsNAFaName = _qs(".team-NA__wrapper h2 span") , Description = _qs("meta[name='description']") , SameGroupWrapper = _qs(".sameGroup__wrapper div") , HighlightsWrapper = _qs(".highlights__wrapper ul");

    window.addEventListener('load' , () => {
        TeamImageURL = Team.getImageURL();
        TeamName = Team.name;
        Title.textContent = `${TeamName} - ${Team.faName}`;
        Description.setAttribute("content" , `نتایج و آمار تیم ${Team.faName} در جام جهانی قطر 2022`);
        TeamTitle.textContent = `${TeamName}`;
        TeamFlag.setAttribute("src" , `${TeamImageURL}`);
        TeamFlag.setAttribute("alt" , `${TeamName}'s Flag`);
        DownloadBtn.setAttribute("href" ,`${TeamImageURL}`);
        DownloadBtn.setAttribute("download" ,`${TeamName}`);
        DownloadBtn.setAttribute("title" ,`دانلود پرچم ${Team.faName}`);
        TeamsNA.setAttribute("src" ,`${Team.getAudioURL()}`);
        TeamsStatsGroup.textContent = Team.group;
        TeamsStatsMP.textContent = Team.MP;
        TeamsStatsW.textContent = Team.W;
        TeamsStatsD.textContent = Team.D;
        TeamsStatsL.textContent = Team.L;
        TeamsStatsGF.textContent = Team.GF;
        TeamsStatsGA.textContent = Team.GA;
        TeamsStatsGD.textContent = Team.GD;
        TeamsStatsPTS.textContent = Team.PTS;
        TeamsNAFaName.textContent = Team.faName;
        Team.L3.forEach(result => {
            text = 'برد';
            itemClass = 'w';
            if (result.toLowerCase() == "d") {
                text = "مساوی";
                itemClass = 'd';
            } else if (result.toLowerCase() == "l") {
                text = "باخت";
                itemClass = 'l';
            }
            TeamsLast3.insertAdjacentHTML("beforeend" , `<li class="${itemClass}">${text}</li>`);
        });
        Teams.filter(team => {
            return (team.group == Team.group && team.ISO != Team.ISO);
        }).forEach(team => {
            link = $.createElement("a");
            image = $.createElement("div");
            title = $.createElement("h3");
            link.classList.add("samegroup");
            link.href = `../Pages/Teams.html?ISO=${team.ISO}`;
            image.style.cssText = `background-image: url("${team.getImageURL()}")`;
            image.classList.add("img");
            title.textContent = team.faName;
            link.append(image , title);
            SameGroupFragment.append(link);
        });
        SameGroupWrapper.append(SameGroupFragment);
        Team.lastMatches.forEach(match => {
            opponentTeam = Teams.find(team => team.ISO == match.teamISO);
            highlightTeam = `
            <li class="highlight">
                <a href="${(Team.group == opponentTeam.group ? "../index.html" : "./knockout-stage.html")}" class="stage">${(Team.group == opponentTeam.group ? "مرحله گروهی" : "مرحله حذفی")}</a>
                <a href="./Teams.html?ISO=${opponentTeam.ISO}" class="highlight-team__link" title="مشاهده تیم ${opponentTeam.faName}">
                    <img src="../Pic/Flags/${opponentTeam.ISO}.png" alt="${opponentTeam.faName}">
                    <p>${opponentTeam.faName}</p>
                </a>
                <a href="${match.highlightURL}" class="btn">خلاصه بازی</a>
                <a href="./Teams.html?ISO=${Team.ISO}" class="highlight-team__link" title="مشاهده تیم ${Team.faName}">
                    <p>${Team.faName}</p>
                    <img src="../Pic/Flags/${Team.ISO}.png" alt="${Team.faName}">
                </a>
            </li>`;
        HighlightsWrapper.insertAdjacentHTML("beforeend" , highlightTeam);
        });
    });
} else {
    location.replace("../index.html");
}