import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Los Angeles Times" },
      author: "Meredith Blake, Glenn Whipp",
      title:
        "2021 Emmys live chat: Real-time awards news and analysis - Los Angeles Times",
      description:
        "Our TV experts are breaking down the best speeches, biggest upsets and other top stories of Sunday's Emmy Awards live.",
      url: "https://www.latimes.com/entertainment-arts/tv/story/2021-09-19/emmys-2021-live-awards-news-analysis",
      urlToImage:
        "https://ca-times.brightspotcdn.com/dims4/default/d0667cc/2147483647/strip/true/crop/2971x1560+0+55/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc9%2Fbb%2F4a3b152d46dab9f116948c896471%2Fla-et-emmys-2021-ap-16.JPG",
      publishedAt: "2021-09-20T02:37:30Z",
      content:
        "The 73rd Primetime Emmy Awards are upon us. Weve scoped out the set design, made our predictions, and warmed up our TVs (or live streaming apps, in the case of the cord-cutters). Now its time to sett… [+10564 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Guardian staff reporter",
      title:
        "Pro-Putin party wins majority in Russian elections despite declining support - The Guardian",
      description:
        "Partial results show ruling United Russia party will retain power in parliament after winning over 45% of the vote",
      url: "https://amp.theguardian.com/world/2021/sep/20/pro-putin-party-wins-majority-in-russian-elections-despite-declining-support",
      urlToImage:
        "https://i.guim.co.uk/img/media/48c5174374d237b2805a01e74dc22acc7d7b9e25/0_221_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3154223b0f6e4f5e27a1651135fae856",
      publishedAt: "2021-09-20T02:26:00Z",
      content:
        "Russias ruling United Russia party, which supports president Vladimir Putin, retained its majority in parliament after a three-day election and a sweeping crackdown on its critics, despite losing aro… [+3966 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Andreea Papuc",
      title:
        "Stocks, Futures Fall Amid Evergrande, Fed Risks: Markets Wrap - Yahoo Finance",
      description:
        "(Bloomberg) -- Stocks and U.S. futures fell Monday as sentiment deteriorated due to the China Evergrande Group debt crisis and a looming Federal Reserve...",
      url: "https://finance.yahoo.com/news/stocks-set-dip-traders-mull-220038314.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/9nwPeu.kPh_oqVgdoPlgOg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/4bd06c95146347f4263c0c689e4b0196",
      publishedAt: "2021-09-20T01:52:30Z",
      content:
        "(Bloomberg) -- Stocks and U.S. futures fell Monday as sentiment deteriorated due to the China Evergrande Group debt crisis and a looming Federal Reserve meeting thats expected to hint at moving towar… [+3301 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Lauren Fox and Daniella Diaz, CNN",
      title:
        "Democrats unlikely to get immigration measure in $3.5 trillion budget proposal after Senate parliamentarian ruling - CNN",
      description:
        "Senate Democrats likely will not be able to include a pathway to legalization for millions of immigrants in their $3.5 trillion bill to expand the country's social safety net after new guidance from the Senate parliamentarian Sunday night.",
      url: "https://www.cnn.com/2021/09/19/politics/immigration-senate-parliamentarian-budget-reconciliation/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210919210003-chuck-schumer-file-0914-super-tease.jpg",
      publishedAt: "2021-09-20T01:46:00Z",
      content:
        "Washington (CNN)Senate Democrats likely will not be able to include a pathway to legalization for millions of immigrants in their $3.5 trillion bill to expand the country's social safety net after ne… [+3234 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Liz Szabo,  Kaiser Health News",
      title:
        "Scientists examine kids' unique immune systems as more fall victim to Covid - CNN",
      description:
        "With the Delta variant fueling a massive resurgence of disease, many hospitals are hitting a heartbreaking new low. They're now losing babies to the coronavirus.",
      url: "https://www.cnn.com/2021/09/19/health/kids-misc-scientists-study-khn-partner/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210818011915-school-covid-test-ky-0817-super-tease.jpg",
      publishedAt: "2021-09-20T01:15:00Z",
      content:
        "KHN (Kaiser Health News) is a national newsroom that produces in-depth journalism about health issues. Together with Policy Analysis and Polling, KHN is one of the three major operating programs at K… [+11736 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Michael Wayland",
      title:
        "Toyota unveils new 2022 Tundra pickup truck with new hybrid engine - CNBC",
      description:
        "Toyota unveiled its new 2022 with a bolder look, new technologies and more power. But the additional power will not be from a V-8 engine.",
      url: "https://www.cnbc.com/2021/09/19/toyota-unveils-new-2022-tundra-pickup-truck-with-new-hybrid-engine.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106943645-16318994291942022_Toyota_Tundra_Limited_001.jpg?v=1631899501",
      publishedAt: "2021-09-20T01:00:00Z",
      content:
        "2022 Toyota Tundra Limited\r\nToyota Motor on Sunday unveiled its new 2022 Tundra pickup with a bolder look, new technologies and more power. But what may surprise many truck owners is the additional p… [+2756 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Ellie Spina",
      title:
        "'She's aging backward': Catherine Zeta-Jones stuns at 2021 Emmy Awards - Yahoo Lifestyle",
      description:
        "Fans can't get enough of Catherine Zeta-Jones's \"earth-shatteringly gorgeous\" look from the 73rd Primetime Emmy Awards on Sunday evening.",
      url: "https://www.yahoo.com/lifestyle/catherine-zeta-jones-emmyy-2021-004628411.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/IAJZBuTMcyWb1i3_Z82u2w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/fe54e430-19a4-11ec-ae3b-cf6a22067eb8",
      publishedAt: "2021-09-20T00:55:48Z",
      content:
        "Catherine Zeta-Jones looked ageless on the 2021 Emmys red carpet. (Photo by Rich Fury/Getty Images)\r\nFans can't get enough of Catherine Zeta-Jones's \"earth-shatteringly gorgeous\" look from the 73rd P… [+1907 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Eustance Huang",
      title:
        "Evergrande collapse could have a 'domino effect' on China's property sector, AllianceBernstein says - CNBC",
      description:
        "Some developers \"can't survive much longer\" if the refinancing channel remains shut for a prolonged period, warns AllianceBernstein's Jenny Zeng.",
      url: "https://www.cnbc.com/2021/09/20/evergrande-debt-collapse-could-have-domino-effect-on-china-properties.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106913302-1626746123020-gettyimages-1232015072-PGONCHAR_W7463.jpeg?v=1631865580",
      publishedAt: "2021-09-20T00:50:00Z",
      content:
        'The Evergrande Group or Evergrande Real Estate Group logo of a Chinese real estate company is seen on a smartphone and a PC screen.\r\nChina\'s "highly distressed" real estate companies are at risk of c… [+3117 chars]',
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Jill Goldsmith",
      title:
        "Brett Goldstein Beats Out Three Other ‘Ted Lasso’ Nominees For Best Supporting Actor Comedy Emmy; Jokes He “Was Not Allowed To Swear” In Speech - Deadline",
      description:
        "An elated Brett Goldstein said he “was very, very specifically told I am not allowed to swear,” if he won, which he did Sunday, nabbing the Emmy for Outstanding Supporting Actor in a Comedy Series for Ted Lasso. Working on the show, he said, “has been one of …",
      url: "https://deadline.com/2021/09/brett-goldstein-wins-2021-emmy-supporting-actor-comedey-series-1234839537/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2021/09/117938_0687.jpg?w=1024",
      publishedAt: "2021-09-20T00:37:00Z",
      content:
        "An elated Brett Goldstein said he “was very, very specifically told I am not allowed to swear,” if he won, which he did Sunday, nabbing the Emmy for Outstanding Supporting Actor in a Comedy Series fo… [+2200 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: "Dustin Jones",
      title:
        "Botched International Submarine Deal Leaves France Feeling Betrayed - NPR",
      description:
        "Australia brokered a deal estimated at $66 billion with France in 2016 for a new fleet of submarines. But Australia has canceled the contract and will get nuclear subs from the U.S. and U.K. instead.",
      url: "https://www.npr.org/2021/09/19/1038746061/submarine-deal-us-uk-australia-france",
      urlToImage:
        "https://media.npr.org/assets/img/2021/09/19/ap21260066578940_wide-75c49f6cef3cf552c8d88451b5f6660e991105a4.jpg?s=1400",
      publishedAt: "2021-09-20T00:31:02Z",
      content:
        "The USS Missouri, pictured in Hawaii earlier this month, is one of the U.S. Navy's nuclear-powered submarines. The U.S., U.K. and Australia signed into a partnership last week that will provide Austr… [+4744 chars]",
    },
    {
      source: { id: null, name: "The Phinsider" },
      author: "Kevin Nogle",
      title:
        "Bills vs Dolphins 2021 recap: Stock watch for Miami after 35-0 loss - The Phinsider",
      description:
        "The Miami Dolphins were manhandled on Sunday, simply beaten up and down the field all afternoon. The Buffalo Bills came into South Florida looking to avoid an 0-2 start to the season, and they did...",
      url: "https://www.thephinsider.com/2021/9/19/22683137/miami-dolphins-winners-losers-versus-buffalo-bills-week-2-2021-recap-tua-tagovailoa-injury",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/FphOsoNOizSQwJVRB6zAVTJjgGc=/0x0:5088x2664/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22863009/1341292309.jpg",
      publishedAt: "2021-09-20T00:17:30Z",
      content:
        "The Miami Dolphins were manhandled on Sunday, simply beaten up and down the field all afternoon. The Buffalo Bills came into South Florida looking to avoid an 0-2 start to the season, and they did it… [+4281 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Jeff Howe, Dan Pompei, Ted Nguyen",
      title:
        "Derek Carr and Raiders impress, Titans, Bills bounce back in Week 2 takeaways - The Athletic",
      description:
        "Las Vegas knocked off its second quality opponent in as many weeks while Tennessee came all the way back in Seattle.",
      url: "https://theathletic.com/2835007/2021/09/19/derek-carr-and-raiders-impress-are-colts-in-trouble-week-2-takeaways/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2021/09/19164008/GettyImages-1341318157-1024x675.jpg",
      publishedAt: "2021-09-20T00:11:15Z",
      content:
        "The Bills and Titans bounced back from rough Week 1 performances, the Rams and Raiders kept rolling, and the Vikings and Chargers lost heartbreakers. Here’s what The Athletic’s  Jeff Howe, Ted Nguyen… [+852 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Sarah Polus",
      title:
        "Three people shot, injured after baby shower dispute | TheHill - The Hill",
      description:
        "Three people were left injured after shots rang out at a baby shower in Pennsylvania on Saturday...",
      url: "https://thehill.com/homenews/news/572954-three-people-shot-injured-after-baby-shower-dispute",
      urlToImage:
        "https://thehill.com/sites/default/files/police_913_istock_1.jpg",
      publishedAt: "2021-09-20T00:01:21Z",
      content:
        "Three people were left injured after shots rang out at a baby shower in Pennsylvania on Saturday evening, CNN reports.\r\nA dispute erupted over presents at the event, held at the Kinloch Volunteer Fir… [+970 chars]",
    },
    {
      source: { id: null, name: "BuzzFeed News" },
      author: "Adolfo Flores",
      title:
        "Thousands of Haitians Lack Food, Water, And Medicine At A Bleak US-Mexico Border Camp - BuzzFeed News",
      description:
        "Natural disasters and political instability have for years sent Haitians fleeing their country. Now they’ve made camp at the US border: “This is worse than being in prison.”",
      url: "https://www.buzzfeednews.com/article/adolfoflores/haitians-border-deportation-del-rio",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2021-09/19/23/campaign_images/261fecb1b10b/thousands-of-haitians-lack-food-water-and-medicin-2-9556-1632093240-2_dblbig.jpg?resize=1200:*",
      publishedAt: "2021-09-19T23:14:00Z",
      content:
        "DEL RIO, Texas Fear and desperation gripped a makeshift camp in Texas holding about 13,000 immigrants, most of them from Haiti, on Sunday amid food shortages, medical issues, and confusion as word sp… [+6681 chars]",
    },
    {
      source: { id: null, name: "Slate Magazine" },
      author: "Daniel Politi",
      title:
        "GOP Senators Reportedly Refuse to Go Along With Trump’s Plan to Depose McConnell - Slate",
      description:
        "The former president has been making calls, but no one seems to be all that interested.",
      url: "https://slate.com/news-and-politics/2021/09/republican-senators-trump-plan-oust-mcconnell.html",
      urlToImage:
        "https://compote.slate.com/images/5b0974db-06c1-4af5-8079-91d82c4692bb.jpeg?width=780&height=520&rect=3200x2133&offset=0x0",
      publishedAt: "2021-09-19T23:07:00Z",
      content:
        "Former President Donald Trump has made no secret that he is eager to end Mitch McConnells run as the Republican leader in the Senate, but lawmakers dont seem all that interested, reports the Wall Str… [+1444 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Gas price rise: Government considering loans for energy firms - BBC News",
      description:
        'Boris Johnson says market forces should be "very swift" in resolving issues caused by recent gas price increases.',
      url: "https://www.bbc.com/news/business-58620167",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1664A/production/_120622719_gettyimages-156854464.jpg",
      publishedAt: "2021-09-19T23:02:16Z",
      content:
        "By Simon JackBusiness editor\r\nimage source, Getty Images\r\nThe government is considering offering emergency state-backed loans to energy companies as firms battle to stay afloat amid surging gas price… [+4357 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Lisa Eadicicco",
      title:
        "Should you upgrade to iPhone 13? Let's compare it to iPhone 12 through iPhone 7 - CNET",
      description:
        "Will you notice the difference with the upgrade? We compare the new iPhone with the last five years' worth of Apple phones.",
      url: "https://www.cnet.com/tech/mobile/should-upgrade-iphone-13-compare-iphone-12/",
      urlToImage:
        "https://www.cnet.com/a/img/FVqTslmbZ28XEMXYD6z385e8I9g=/1200x630/2021/09/15/ec188d2b-2d9d-4eed-b4d9-1597593be1fd/iphone-13-cameras-lenses.jpg",
      publishedAt: "2021-09-19T22:57:44Z",
      content:
        "This story is part of Apple Event, our full coverage of the latest news from Apple.\r\nApple on Tuesday announced the iPhone 13 lineup, which includes the $699 (£679, AU$1,849) iPhone 13 Mini, $799 iPh… [+23401 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Lora Kolodny",
      title:
        "Elon Musk mocks President Biden after SpaceX completes first all-civilian mission - CNBC",
      description:
        "SpaceX and Tesla CEO Elon Musk mocked President Joe Biden on Sunday for neglecting to praise his aerospace company's historic, all-civilian mission to orbit.",
      url: "https://www.cnbc.com/2021/09/19/elon-musk-mocks-president-biden-after-spacex-completes-first-all-civilian-mission.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg?v=1628885182",
      publishedAt: "2021-09-19T22:54:04Z",
      content:
        "After SpaceX completed a historic, private spaceflight on Saturday, CEO Elon Musk took a pot shot at President Joe Biden who had yet to remark on the company's and the civilian flight crew's accompli… [+3612 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Raphael Minder",
      title:
        "Thousands Evacuated as Canary Island Volcano Erupts - The New York Times",
      description:
        "A volcano on the island of La Palma spewed lava and smoke, prompting an evacuation of thousands and forcing the Spanish prime minister to delay a trip to New York.",
      url: "https://www.nytimes.com/2021/09/19/world/europe/thousands-evacuated-as-canary-island-volcano-erupts.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/09/19/world/19spain-volcano-sub/merlin_194983533_f59b3708-ea2c-4d65-8d6c-fed1754606ba-facebookJumbo.jpg",
      publishedAt: "2021-09-19T22:47:30Z",
      content:
        "A volcano erupted Sunday on the Spanish island of La Palma, spewing lava and a thick column of smoke and prompting the authorities to evacuate thousands of residents from nearby towns.\r\nThe eruption … [+770 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "J. David Goodman, Reid J. Epstein",
      title:
        "Beto O’Rourke Draws Closer to Entering Texas Governor’s Race - The New York Times",
      description:
        "Mr. O’Rourke has been calling Democratic leaders in Texas to tell them he is seriously considering challenging Gov. Greg Abbott in 2022.",
      url: "https://www.nytimes.com/2021/09/19/us/texas-beto-governors-race.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/09/19/us/19texas-beto/19texas-beto-facebookJumbo.jpg",
      publishedAt: "2021-09-19T22:34:12Z",
      content:
        "Mr. ORourke did not respond to calls or text messages seeking comment. \r\nDavid Wysong, a longtime adviser to Mr. ORourke, cautioned that no decision has been made on a run for governor. The three peo… [+1568 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
 async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5c2a632111aa4f738fdf21c08539e874'
    let data =await fetch(url)
    let parsedData =await data.json()
    console.log(parsedData)
    this.setState ({articles:parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                // if show any null error so then like title show null then use any from both of them
                // ( title={element.title?element.title.slice(0 , 50):""}     )  
                //                  OR
                // ( title={!element.title?element.title.slice(0 , 50):""}     )
                  // khuchh bhi kaam kar jayega
                  title={element.title.slice(0 , 50)}
                  description={element.description.slice(0,70)}
                  imageUrl={element.urlToImage} NewsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;