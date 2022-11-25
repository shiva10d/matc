import './Input.scss'

function Input(props: { labelName: string, placeholder:string }) {
    let { labelName, placeholder } = props;
    return (
        <>
            <label className='h7'>{labelName}</label>
            <input className='w-100 p-2 border border-1 focus-visible-only rounded h6 ' placeholder={placeholder} />
        </>
    )
}

export default Input