from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from .models import Chat
from .serializers import ChatSerializer
import openai

openai_api_key = 'your api key here'
openai.api_key = openai_api_key

@method_decorator(csrf_exempt, name='dispatch')
class ChatBotAPIView(APIView):
    def post(self, request, format=None):
        try:
            message = request.data.get('message')
            if not message:
                return Response({'error': 'Message data not provided'}, status=status.HTTP_400_BAD_REQUEST)
            
            response = self.ask_openai(message)
            # Save the chat message without specifying the user
            chat = Chat(message=message, response=response, created_at=timezone.now())
            chat.save()
            serializer = ChatSerializer(chat)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            # Log the exception for debugging purposes
            # print(f'Error saving chat message: {e}')
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request, format=None):
        chats = Chat.objects.all()
        serializer = ChatSerializer(chats, many=True)
        return Response(serializer.data)

    def ask_openai(self, message):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": message},
            ]
        )
        answer = response.choices[0].message.content.strip()
        return answer
