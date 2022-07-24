import { CheckIcon, XIcon } from "@heroicons/react/outline"
import { FaCross } from "react-icons/fa"

interface Props {
    selectedPlan: string
}

function Table({selectedPlan}: Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="tableRow">
                    <td className="tableTitle">Monthly price</td>
                    <td className={`tableData ${selectedPlan === "Basic" ? 'opacity-100' : 'opacity-40'}`}>30$</td>
                    <td className={`tableData ${selectedPlan === "Standart" ? 'opacity-100' : 'opacity-40'}`}>45$</td>
                    <td className={`tableData ${selectedPlan === "Premium" ? 'opacity-100' : 'opacity-40'}`}>55$</td>
                </tr>
                <tr className="tableRow">
                    <td className="tableTitle">Video quality</td>
                    <td className={`tableData ${selectedPlan === "Basic" ? 'opacity-100' : 'opacity-40'}`}>Good</td>
                    <td className={`tableData ${selectedPlan === "Standart" ? 'opacity-100' : 'opacity-40'}`}>Better</td>
                    <td className={`tableData ${selectedPlan === "Premium" ? 'opacity-100' : 'opacity-40'}`}>Best</td>
                </tr>
                <tr className="tableRow">
                    <td className="tableTitle">Resolution</td>
                    <td className={`tableData ${selectedPlan === "Basic" ? 'opacity-100' : 'opacity-40'}`}>720p</td>
                    <td className={`tableData ${selectedPlan === "Standart" ? 'opacity-100' : 'opacity-40'}`}>1080p</td>
                    <td className={`tableData ${selectedPlan === "Premium" ? 'opacity-100' : 'opacity-40'}`}>4K+</td>
                </tr>
                <tr className="tableRow">
                    <td className="tableTitle">Watch on your TV, computer, mobile phone and tablet</td>
                    <td className={`tableData ${selectedPlan === "Basic" ? 'opacity-100 text-[#da1f3b]' : 'opacity-40'}`}>{selectedPlan === "Basic" ? <CheckIcon className="checkIcon"/> : <XIcon className="checkIcon h-7"/>}</td>
                    <td className={`tableData ${selectedPlan === "Standart" ? 'opacity-100 text-[#da1f3b]' : 'opacity-40'}`}>{selectedPlan === "Standart" ? <CheckIcon className="checkIcon"/> : <XIcon className="checkIcon h-7"/>}</td>
                    <td className={`tableData ${selectedPlan === "Premium" ? 'opacity-100 text-[#da1f3b]' : 'opacity-40'}`}>{selectedPlan === "Premium" ? <CheckIcon className="checkIcon"/> : <XIcon className="checkIcon h-7"/>}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table