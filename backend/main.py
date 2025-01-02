from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Python backend for SignBridge!"}

@app.get("/api/demo")
async def demo_endpoint():
    return {"message": "This is a demo endpoint."}

@app.get("/api/health")
async def health_check():
    return {"status": "UP"}
