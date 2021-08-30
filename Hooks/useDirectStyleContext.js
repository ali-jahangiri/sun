import useStyleGate from './useStyleGate';
import useStyleProvider from './useStyleProvider';

const useDirectStyleContext = () => {
    const nearStyleGateContext = useStyleGate();
    const styleProviderContext = useStyleProvider();

    return {
        ...styleProviderContext,
        ...nearStyleGateContext
    }
}


export default useDirectStyleContext;