import { FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone } from "react-icons/fa";

const LeadCard = ({ lead, onAccept, onDecline, status }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-lg font-bold text-white">
                    {lead.firstName.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h3 className="text-lg font-bold">{status === "invited" ? lead.firstName : lead.fullName}</h3>
                    <p className="text-gray-500">{lead.dateCreated}</p>
                </div>
            </div>
            <div className="mt-2 text-gray-700">
                <p className="flex items-center gap-2"><FaMapMarkerAlt /> {lead.suburb}</p>
                <p className="flex items-center gap-2"><FaBriefcase /> {lead.category} - Job ID: {lead.id}</p>
                <p className="mt-2">{lead.description}</p>
                <p className="text-lg font-bold mt-2">${lead.price.toFixed(2)} Lead Invitation</p>
            </div>
            {status === "accepted" && (
                <div className="mt-2 text-gray-700">
                    <p className="flex items-center gap-2 text-orange-600"><FaPhone /> {lead.phoneNumber}</p>
                    <p className="flex items-center gap-2 text-blue-600"><FaEnvelope /> {lead.email}</p>
                </div>
            )}
            {status === "invited" && (
                <div className="flex gap-2 mt-4">
                    <button onClick={() => onAccept(lead.id)} className="bg-orange-500 text-white p-2 rounded-lg">Accept</button>
                    <button onClick={() => onDecline(lead.id)} className="bg-gray-300 text-gray-700 p-2 rounded-lg">Decline</button>
                </div>
            )}
        </div>
    );
};

export default LeadCard;


//import React from "react";

//const LeadCard = ({ lead, onAccept, onDecline }) => {
//    return (
//        <div className="bg-white shadow-md rounded-2xl p-4 mb-4 border">
//            <div className="flex items-center gap-3 mb-2">
//                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
//                    {lead.name.charAt(0).toUpperCase()}
//                </div>
//                <div>
//                    <h3 className="text-lg font-semibold">{lead.name}</h3>
//                    <p className="text-gray-500 text-sm">{lead.date}</p>
//                </div>
//            </div>

//            <div className="text-gray-600 text-sm">
//                <p>📍 {lead.suburb}</p>
//                <p>🛠 {lead.category}</p>
//                <p>💼 Job ID: {lead.id}</p>
//                <p className="mt-2">{lead.description}</p>
//            </div>

//            <div className="flex justify-between items-center mt-4">
//                <span className="font-bold text-gray-700">${lead.price.toFixed(2)} Lead Invitation</span>
//                <div className="flex gap-2">
//                    <button
//                        onClick={() => onAccept(lead)}
//                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
//                    >
//                        Accept
//                    </button>
//                    <button
//                        onClick={() => onDecline(lead)}
//                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//                    >
//                        Decline
//                    </button>
//                </div>
//            </div>
//        </div>
//    );
//};

//export default LeadCard;
