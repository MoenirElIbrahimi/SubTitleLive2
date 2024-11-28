# import asyncio
# import pyaudio
# import websockets
# from deepgram import Deepgram
# import deepl

# DEEPGRAM_API_KEY = "355085c9b77f500b65e3ac81e6b9d77b0c1bde39"
# DEEPL_API_KEY = "a7ad26a8-8d22-4d81-a943-b78f19f8ed98:fx"

# deepgram_client = Deepgram(DEEPGRAM_API_KEY)
# translator = deepl.Translator(DEEPL_API_KEY)

# async def process_audio():
#     try:
#         async with websockets.connect(
#             f"wss://api.deepgram.com/v1/listen?access_token={DEEPGRAM_API_KEY}"
#         ) as websocket:
#             print("Verbonden met Deepgram WebSocket!")
#     except websockets.exceptions.InvalidStatusCode as e:
#         print(f"WebSocket error: {e}")
#         if e.status_code == 401:
#             print("Controleer je API-sleutel en permissies.")
#     except Exception as e:
#         print(f"Onverwachte fout: {e}")

# asyncio.run(process_audio())
