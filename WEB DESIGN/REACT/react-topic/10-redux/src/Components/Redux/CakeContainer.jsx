import { buyer, buyer2 } from './Action'
import { connect } from "react-redux"

const CakeContainer = (props) => {
    return (
        <>
            <div className='flex justify-around'>
                <div className='h-screen grid place-content-center'>
                    <h1 className='pb-5 text-3xl mb-10'>number of cakes - {props.numOfcake}</h1>
                    <button className=' rounded-lg p-5 bg-pink-400 text-xl  border-[3px]' onClick={props.buyer}>buy cake</button>
                </div>
                <div className='h-screen grid place-content-center'>
                    <h1 className='pb-5 text-3xl mb-10'>number of food - {props.numOffood}</h1>
                    <button className=' rounded-lg p-5 bg-yellow-400 text-xl  border-[3px]' onClick={props.buyer2}>buy food</button>
                </div>
            </div>
        </>

    )
}

const mapStatePropes = state => {
    return {
        numOfcake: state.numOfcake,
        numOffood: state.numOffood
    }
}


const mapDispatchToPropes = dispatch => {
    return {
        buyer: () => dispatch(buyer()),
        buyer2: () => dispatch(buyer2())
    }
}

export default connect(mapStatePropes, mapDispatchToPropes)(CakeContainer)
