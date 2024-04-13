from rest_framework import serializers
from .models import ChatRoom,ChatMessage
from User.serializers import UserSerializer

class ChatRoomSerializer(serializers.ModelSerializer):

    member = UserSerializer(many=True,read_only=True)
    members = serializers.ListField(write_only=True)

    def create(self,validated_data):
        memberObject = validated_data.pop('members')
        chatRoom = ChatRoom.objects.create(**validated_data)
        chatRoom.member.set(memberObject)
        return chatRoom
    class Meta:
        model = ChatRoom
        exclude =['id']
        
        
class ChatMessageSerializer(serializers.ModelSerializer):
    userName =serializers.SerializerMethodField()
    userImage = serializers.ImageField(source='user.profileImage')
    class Meta:
        model = ChatMessage
        exclude =['id','chat']
    def get_userName(self,obj):
        return obj.user.first_name + ' ' + obj.user.last_name
