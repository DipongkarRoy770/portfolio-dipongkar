import { useScramble } from "use-scramble";


const ScambleText = () => {
    const { ref } = useScramble({
        text: 'Dipongkar Roy',
        speed: 0.2,
        tick: 1,
        step: 1,
        scramble: 1,
        seed: 0,
    });

    return <p className="text-5xl mb-5 font-semibold text-orange-400 mt-3" ref={ref} />;


};

export default ScambleText;


