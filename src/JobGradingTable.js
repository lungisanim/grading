import React, { useState } from 'react';
import Modal from 'react-modal';
import jobGradingData from './GradingData';
import './Modal.css'

const JobGradingTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = jobGradingData.filter((row) =>
        row.occupationalLevel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };

    const closeModal = () => {
        setSelectedRow(null);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search occupation levels"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Occupational Level</th>
                        <th>Paterson Classic</th>
                        <th>Paterson Modern</th>
                        <th>ReMeasure</th>
                        <th>Hay Units</th>
                        <th>Hay Decision Tree</th>
                        <th>Peromnes</th>
                        <th>Task</th>
                        <th>JEasy</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index} onClick={() => handleRowClick(row)}>
                            <td>{row.occupationalLevel}</td>
                            <td>{row.patersonClassic.join(', ')}</td>
                            <td>{row.patersonModern.join(', ')}</td>
                            <td>{row.reMeasure.join(', ')}</td>
                            <td>{row.hayUnits.join(', ')}</td>
                            <td>{row.hayDecisionTree.join(', ')}</td>
                            <td>{row.peromnes.join(', ')}</td>
                            <td>{row.task.join(', ')}</td>
                            <td>{row.jEasy.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                isOpen={selectedRow !== null}
                onRequestClose={closeModal}
                contentLabel="Job Description"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <span className="modal-close" onClick={closeModal}>
                    &times;
                </span>
                <h2>{selectedRow?.occupationalLevel}</h2>
                <p>{selectedRow?.description}</p>
            </Modal>
        </div>
    );
};

export default JobGradingTable;