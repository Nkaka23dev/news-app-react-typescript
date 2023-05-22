import Button from '../Button'

export default function HeroText({ invert }: { invert?: boolean }) {
    return (
        <section className='absolute bottom-0 p-5'>
            <div className='flex flex-col items-start space-y-2'>
                <Button />
                <div className={`md:font-normal text-white font-semibold ${invert ? 'text-lg lg:text-sm' : 'text-3xl lg:text-lg'} `}>
                    3 Outfits That Will Amaze You on Coming Holiday
                </div>
                <div>
                    <span className='text-white text-xs uppercase md:font-normal font-semibold opacity-95'>SHANE DOE - AUGUST 14, 2016</span>
                </div>
            </div>
        </section >
    )
}
