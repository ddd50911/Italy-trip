import pandas as pd
import json
import os

file_path = '義大利2026.4.xlsx'

if not os.path.exists(file_path):
    print(json.dumps({"error": "File not found"}))
    exit(1)

try:
    # Read all sheets
    xls = pd.ExcelFile(file_path)
    all_data = {}
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet_name)
        # Convert to list of dicts, handling NaN
        all_data[sheet_name] = df.where(pd.notnull(df), None).to_dict(orient='records')
    
    print(json.dumps(all_data, ensure_ascii=False, indent=2, default=str))

except Exception as e:
    print(json.dumps({"error": str(e)}))
