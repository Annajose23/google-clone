import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Response from '../response';
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter();
    return (
        <div>
            <Head>
            <title>
               {router.query.term} - Search Results
            </title>
            </Head>
            {/* Header */}
            <Header/>
            {/* Search Results */}
            <SearchResults results={results}/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || '0'
    const data = useDummyData? Response : await fetch(`https://customsearch.googleapis.com/customsearch/v1?cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&key=${process.env.API_KEY}&start=${startIndex}`
    ).then(response => response.json());
    return{
        props:{
            results:data
        },
    };
}