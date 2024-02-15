from django.conf import settings
from postmarker.core import PostmarkClient


class PostmarkService:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.client = PostmarkClient(server_token=settings.POSTMARK_API_TOKEN)
        return cls._instance

    def send_email(self, to, subject, body):
        self.client.emails.send(
            From='20210773@aloe.ulima.edu.pe',
            To=to,
            Subject=subject,
            TextBody=body
        )
