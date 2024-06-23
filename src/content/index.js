export const labTest = async () => {
    const data = [
        {
          "id": 1,
          "name": "Complete Blood Count (CBC)",
          "description": "Measures different components of blood",
          "price": 50.00,
          "category": "Hematology"
        },
        {
          "id": 2,
          "name": "Basic Metabolic Panel (BMP)",
          "description": "Measures electrolyte and glucose levels",
          "price": 75.00,
          "category": "Chemistry"
        },
        {
          "id": 3,
          "name": "Lipid Profile",
          "description": "Measures cholesterol and triglyceride levels",
          "price": 100.00,
          "category": "Lipidology"
        },
        {
          "id": 4,
          "name": "Urinalysis",
          "description": "Analyzes urine for various substances",
          "price": 30.00,
          "category": "Urology"
        }
      ];
      return data;
}