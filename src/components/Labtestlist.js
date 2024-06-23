import React, { useState, useEffect } from 'react';
import LabTestCard from './Labtestcard';
import { labTest } from '../content';
import Navbar from './Navbar';

const LabTestList = () => {
  const [labTests, setLabTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    labTest()
     .then(data => {
        setLabTests(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
        <Navbar {...{title: 'Lab Tests', isCart: true }}/>
      {loading? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labTests.map(test => (
            <LabTestCard key={test.id} test={test} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LabTestList;