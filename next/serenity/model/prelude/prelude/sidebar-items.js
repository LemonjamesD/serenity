window.SIDEBAR_ITEMS = {"constant":[["PRESET_GENERAL","Returns a set of permissions with the original @everyone permissions set to true."],["PRESET_TEXT","Returns a set of text-only permissions with the original `@everyone` permissions set to true."],["PRESET_VOICE","Returns a set of voice-only permissions with the original `@everyone` permissions set to true."]],"enum":[["Action","Determines the action that was done on a target."],["ActionType","Type of [`Action`]."],["ActivityType","Discord docs."],["AutoModAction","Discord docs."],["AutomodEventType","Indicates in what event context a rule should be checked."],["Change",""],["Channel","A container for any channel."],["ChannelAction","Discord docs."],["ChannelIdParseError",""],["ChannelOverwriteAction","Discord docs."],["ChannelParseError",""],["ChannelType","A representation of a type of channel."],["CommandDataOptionValue","The value of an [`CommandDataOption`]."],["ComponentInteractionDataKind",""],["ConnectionVisibility","The visibility of a user connection on a user’s profile."],["DefaultAvatar","An enum that represents a default avatar."],["DefaultMessageNotificationLevel","Default message notification level for a guild."],["EmojiAction","Discord docs."],["EntityType",""],["Event","Event received over a websocket connection"],["EventType","The type of event dispatch received from the gateway."],["ExplicitContentFilter","Setting used to filter explicit messages from members."],["GatewayEvent","Discord docs."],["GuildWelcomeChannelEmoji","A [`GuildWelcomeScreen`] emoji."],["GuildWidgetStyle",""],["IncidentStatus","The type of status update during a service incident."],["IntegrationAction","Discord docs."],["IntegrationExpireBehaviour","The behavior once the integration expires."],["Interaction","Discord docs"],["InteractionType","The type of an Interaction."],["InviteAction","Discord docs."],["InviteTargetType","Discord docs."],["KeywordPresetType","Internally pre-defined wordsets which will be searched for in content."],["MemberAction","Discord docs."],["MembershipState","Discord docs."],["Mention","A struct that represents some way to insert a notification, link, or emoji into a message."],["MentionParseError",""],["MessageAction","Discord docs."],["MessageActivityKind","Discord docs."],["MessageType","Differentiates between regular and different types of system messages."],["MfaLevel","Multi-Factor Authentication level for guild moderators."],["Nonce",""],["NsfwLevel","The [`Guild`] nsfw level."],["OnlineStatus","The representation of a user’s status."],["PermissionOverwriteType","The type of edit being made to a Channel’s permissions."],["PremiumTier","The guild’s premium tier, depends on the amount of users boosting the guild currently"],["ReactionType","The type of a [`Reaction`] sent."],["RelatedId","Similar to [`Option`], but with additional variants relevant to [`Event`]’s id methods (such as [`Event::user_id`])."],["ResolvedTarget","The resolved value of a [`CommandData::target_id`]."],["ResolvedValue","The resolved value of a [`CommandDataOption`]."],["RoleAction","Discord docs."],["RoleIdParseError",""],["RoleParseError",""],["ScheduledEventAction","Discord docs."],["ScheduledEventStatus","Discord docs."],["ScheduledEventType","Discord docs."],["Scope","The available OAuth2 Scopes."],["StageInstanceAction","Discord docs."],["StickerAction","Discord docs."],["StickerFormatType","Differentiates between sticker formats."],["StickerType","Differentiates between sticker types."],["ThreadAction","Discord docs."],["Trigger","Characterizes the type of content which can trigger the rule."],["TriggerType","Type of [`Trigger`]."],["Unresolved","Option value variants that couldn’t be resolved by `CommandData::options()`."],["UserIdParseError",""],["VerificationLevel","The level to set as criteria prior to a user being able to send messages in a [`Guild`]."],["VideoQualityMode","The video quality mode for a voice channel."],["WebhookAction","Discord docs."],["WebhookType","A representation of a type of webhook."]],"mod":[["application_command",""],["audit_log","Audit log types for administrative actions within guilds."],["automod","Auto moderation types"],["colours","Colour constants used by Discord for their branding, role colour palette, etc."],["command",""],["component",""],["interaction",""],["message_component",""],["modal",""],["oauth",""],["ping",""]],"struct":[["ActionExecution","Gateway event payload sent when a rule is triggered and an action is executed (e.g. message is blocked)."],["Activity","Representation of an activity that a [`User`] is performing."],["ActivityAssets","The assets for an activity."],["ActivityButton","Discord docs."],["ActivityEmoji","Representation of an emoji used in a custom status"],["ActivityFlags","A set of flags defining what is in an activity’s payload."],["ActivityParty","Information about an activity’s party."],["ActivitySecrets","Secrets for an activity."],["ActivityTimestamps","Timestamps of when a user started and/or is ending their activity."],["AffectedComponent","A component that was affected during a service incident."],["AffectedRole",""],["ApplicationFlags","The flags of the application."],["ApplicationId","An identifier for an Application."],["Attachment","A file uploaded with a message. Not to be confused with `Embed`s."],["AttachmentId","An identifier for an attachment."],["AuditLogEntry","Discord docs."],["AuditLogEntryId","An identifier for an audit log entry."],["AuditLogs","Discord docs."],["AutoModActionExecutionEvent","Requires [`GatewayIntents::AUTO_MODERATION_EXECUTION`]."],["AutoModRuleCreateEvent","Requires [`GatewayIntents::AUTO_MODERATION_CONFIGURATION`]."],["AutoModRuleDeleteEvent","Requires [`GatewayIntents::AUTO_MODERATION_CONFIGURATION`]."],["AutoModRuleUpdateEvent","Requires [`GatewayIntents::AUTO_MODERATION_CONFIGURATION`]."],["AutocompleteOption","The focused option for autocomplete interactions return by [`CommandData::autocomplete`]."],["Ban","A representation of a banning of a user."],["BotGateway","A representation of the data retrieved from the bot gateway endpoint."],["ChannelCreateEvent","Event data for the channel creation event."],["ChannelDeleteEvent","Requires [`GatewayIntents::GUILDS`]."],["ChannelId","An identifier for a Channel"],["ChannelMention","Discord docs."],["ChannelPinsUpdateEvent","Requires [`GatewayIntents::GUILDS`] or [`GatewayIntents::DIRECT_MESSAGES`]."],["ChannelUpdateEvent","Requires [`GatewayIntents::GUILDS`]."],["ClientStatus","Information detailing the current active status of a [`User`]."],["Colour","A utility struct to help with working with the basic representation of a colour. This is particularly useful when working with a `Role`’s colour, as the API works with an integer value instead of an RGB value."],["CommandData","The command data payload."],["CommandDataOption","A set of a parameter and a value from the user."],["CommandDataResolved","The resolved data of a command data interaction payload. It contains the objects of [`CommandDataOption`]s."],["CommandId","An identifier for a slash command."],["CommandInteraction","An interaction when a user invokes a slash command."],["CommandPermissionId","An identifier for a slash command permission Id. Can contain a [`RoleId`] or [`UserId`]."],["CommandPermissionsUpdateEvent","Requires no gateway intents."],["CommandVersionId","An identifier for a slash command version Id."],["ComponentInteraction","An interaction triggered by a message component."],["ComponentInteractionData","A message component interaction data, provided by [`ComponentInteraction::data`]"],["Connection","Information about a connection between the current user and a third party service."],["CurrentApplicationInfo","Information about the current application and its owner."],["CurrentUser","Information about the current user."],["Embed","Represents a rich embed which allows using richer markdown, multiple fields and more. This was heavily inspired by slack’s attachments."],["EmbedAuthor","An author object in an embed."],["EmbedField","A field object in an embed."],["EmbedFooter","Footer information for an embed."],["EmbedImage","An image object in an embed."],["EmbedProvider","The provider of an embed."],["EmbedThumbnail","The dimensions and URL of an embed thumbnail."],["EmbedVideo","Video information for an embed."],["Emoji","Represents a custom guild emoji, which can either be created using the API, or via an integration. Emojis created using the API only work within the guild it was created in."],["EmojiId","An identifier for an Emoji"],["EmojiIdentifier","A version of an emoji used only when solely the animated state, Id, and name are known."],["EmojiIdentifierParseError",""],["FollowedChannel","A container for the IDs returned by following a news channel."],["Gateway","A representation of the data retrieved from the gateway endpoint."],["GatewayIntents","[Gateway Intents] will limit the events your bot will receive via the gateway. By default, all intents except Privileged Intents are selected."],["GenericId","An identifier for an unspecific entity."],["Guild","Information about a Discord guild, such as channels, emojis, etc."],["GuildBanAddEvent","Requires [`GatewayIntents::GUILD_BANS`]."],["GuildBanRemoveEvent","Requires [`GatewayIntents::GUILD_BANS`]."],["GuildChannel","Represents a guild’s text, news, or voice channel. Some methods are available only for voice channels and some are only available for text channels. News channels are a subset of text channels and lack slow mode hence [`Self::rate_limit_per_user`] will be [`None`]."],["GuildCreateEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildDeleteEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildEmojisUpdateEvent","Requires [`GatewayIntents::GUILD_EMOJIS_AND_STICKERS`]."],["GuildId","An identifier for a Guild"],["GuildInfo","Basic information about a guild."],["GuildIntegrationsUpdateEvent","Requires [`GatewayIntents::GUILD_INTEGRATIONS`]."],["GuildMemberAddEvent","Requires [`GatewayIntents::GUILD_MEMBERS`]."],["GuildMemberRemoveEvent","Requires [`GatewayIntents::GUILD_MEMBERS`]."],["GuildMemberUpdateEvent","Requires [`GatewayIntents::GUILD_MEMBERS`]."],["GuildMembersChunkEvent","Requires no gateway intents."],["GuildPreview","Preview `Guild` information."],["GuildPrune","Representation of the number of members that would be pruned by a guild prune operation."],["GuildRoleCreateEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildRoleDeleteEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildRoleUpdateEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildStickersUpdateEvent","Requires [`GatewayIntents::GUILD_EMOJIS_AND_STICKERS`]."],["GuildUpdateEvent","Requires [`GatewayIntents::GUILDS`]."],["GuildWelcomeChannel","A channel shown in the [`GuildWelcomeScreen`]."],["GuildWelcomeScreen","Information relating to a guild’s welcome screen."],["GuildWidget","A [`Guild`] widget."],["Incident","An incident retrieved from the Discord status page."],["IncidentUpdate","An update to an incident from the Discord status page."],["InstallParams","Settings for the application’s default in-app authorization link"],["Integration","Various information about integrations."],["IntegrationAccount","Integration account object."],["IntegrationApplication","Integration application object."],["IntegrationCreateEvent","Requires [`GatewayIntents::GUILD_INTEGRATIONS`]."],["IntegrationDeleteEvent","Requires [`GatewayIntents::GUILD_INTEGRATIONS`]."],["IntegrationId","An identifier for an Integration"],["IntegrationUpdateEvent","Requires [`GatewayIntents::GUILD_INTEGRATIONS`]."],["InteractionCreateEvent","Requires no gateway intents."],["InteractionId","An identifier for an interaction."],["InteractionMessageFlags","The flags for an interaction response message."],["Invite","Information about an invite code."],["InviteChannel","A minimal amount of information about the channel an invite points to."],["InviteCreateEvent","Requires [`GatewayIntents::GUILD_INVITES`]."],["InviteDeleteEvent","Requires [`GatewayIntents::GUILD_INVITES`]."],["InviteGuild","A minimal amount of information about the guild an invite points to."],["InviteStageInstance","Discord docs."],["Maintenance","A Discord status maintenance message. This can be either for active maintenances or for scheduled maintenances."],["Member","Information about a member of a guild."],["MembersIter","A helper class returned by [`GuildId::members_iter`]"],["Message","A representation of a message over a guild’s text channel, a group, or a private channel."],["MessageActivity","Rich Presence activity information."],["MessageApplication","Rich Presence application information."],["MessageCreateEvent","Requires [`GatewayIntents::GUILD_MESSAGES`] or [`GatewayIntents::DIRECT_MESSAGES`]."],["MessageDeleteBulkEvent","Requires [`GatewayIntents::GUILD_MESSAGES`] or [`GatewayIntents::DIRECT_MESSAGES`]."],["MessageDeleteEvent","Requires [`GatewayIntents::GUILD_MESSAGES`] or [`GatewayIntents::DIRECT_MESSAGES`]."],["MessageFlags","Describes extra features of the message."],["MessageId","An identifier for a Message"],["MessageInteraction","Sent when a `Message` is a response to an [`Interaction`]."],["MessageReaction","A representation of a reaction to a message."],["MessageReference","Reference data sent with crossposted messages."],["MessageUpdateEvent","Requires [`GatewayIntents::GUILD_MESSAGES`]."],["MessagesIter","A helper class returned by [`ChannelId::messages_iter`]"],["ModalInteraction","An interaction triggered by a modal submit."],["ModalInteractionData","A modal submit interaction data, provided by [`ModalInteraction::data`]"],["Options","Discord docs."],["PartialChannel","A container for any partial channel."],["PartialCurrentApplicationInfo","Partial information about the given application."],["PartialGuild","Partial information about a [`Guild`]. This does not include information like member data."],["PartialGuildChannel","A partial guild channel."],["PartialMember","A partial amount of data for a member."],["PermissionOverwrite","A channel-specific permission overwrite for a member or role."],["Permissions","A set of permissions that can be assigned to `User`s and `Role`s via `PermissionOverwrite`s, roles globally in a `Guild`, and to `GuildChannel`s."],["PingInteraction","A ping interaction, which can only be received through an endpoint url."],["Presence","Information detailing the current online status of a [`User`]."],["PresenceUpdateEvent","Requires [`GatewayIntents::GUILD_PRESENCES`]."],["PresenceUser","Information about the user of a [`Presence`] event."],["PresencesReplaceEvent","Not officially documented."],["PrivateChannel","A Direct Message text channel with another user."],["Reaction","An emoji reaction to a message."],["ReactionAddEvent","Requires [`GatewayIntents::GUILD_MESSAGE_REACTIONS`] or [`GatewayIntents::DIRECT_MESSAGE_REACTIONS`]."],["ReactionConversionError",""],["ReactionRemoveAllEvent","Requires [`GatewayIntents::GUILD_MESSAGE_REACTIONS`] or [`GatewayIntents::DIRECT_MESSAGE_REACTIONS`]."],["ReactionRemoveEmojiEvent","Requires [`GatewayIntents::GUILD_MESSAGE_REACTIONS`] or [`GatewayIntents::DIRECT_MESSAGE_REACTIONS`]."],["ReactionRemoveEvent","Requires [`GatewayIntents::GUILD_MESSAGE_REACTIONS`] or [`GatewayIntents::DIRECT_MESSAGE_REACTIONS`]."],["Ready","An initial set of information given after IDENTIFYing to the gateway."],["ReadyEvent","The “Ready” event, containing initial ready cache"],["RelatedIdsForEventType","Defines the related IDs that may exist for an [`EventType`]."],["ResolvedOption",""],["ResumedEvent","Requires no gateway intents."],["RichInvite","Detailed information about an invite. This information can only be retrieved by anyone with the Manage Guild permission. Otherwise, a minimal amount of information can be retrieved via the [`Invite`] struct."],["Role","Information about a role within a guild. A role represents a set of permissions, and can be attached to one or multiple users. A role has various miscellaneous configurations, such as being assigned a colour. Roles are unique per guild and do not cross over to other guilds in any way, and can have channel-specific permission overrides in addition to guild-level permissions."],["RoleId","An identifier for a Role"],["RoleTags","The tags of a [`Role`]."],["Rule","Configured auto moderation rule."],["RuleId","An identifier for an auto moderation rule"],["ScheduledEvent","Information about a guild scheduled event."],["ScheduledEventCreateEvent","Requires [`GatewayIntents::GUILD_SCHEDULED_EVENTS`]."],["ScheduledEventDeleteEvent","Requires [`GatewayIntents::GUILD_SCHEDULED_EVENTS`]."],["ScheduledEventId","An identifier for a Scheduled Event"],["ScheduledEventMetadata","Discord docs."],["ScheduledEventUpdateEvent","Requires [`GatewayIntents::GUILD_SCHEDULED_EVENTS`]."],["ScheduledEventUser","Discord docs."],["ScheduledEventUserAddEvent","Requires [`GatewayIntents::GUILD_SCHEDULED_EVENTS`]."],["ScheduledEventUserRemoveEvent","Requires [`GatewayIntents::GUILD_SCHEDULED_EVENTS`]."],["SessionStartLimit","Information describing how many gateway sessions you can initiate within a ratelimit period."],["ShardInfo",""],["SkuId","An identifier for a SKU."],["StageInstance","Discord docs."],["StageInstanceCreateEvent","Requires [`GatewayIntents::GUILDS`]."],["StageInstanceDeleteEvent","Requires [`GatewayIntents::GUILDS`]."],["StageInstanceId","An identifier for a stage channel instance."],["StageInstanceUpdateEvent","Requires [`GatewayIntents::GUILDS`]."],["Sticker","A sticker sent with a message."],["StickerId","An identifier for a sticker."],["StickerItem","The smallest amount of data required to render a sticker."],["StickerPack","A sticker sent with a message."],["StickerPackBannerId","An identifier for a sticker pack banner."],["StickerPackId","An identifier for a sticker pack."],["SystemChannelFlags","Describes a system channel flags."],["TargetId","An identifier for a slash command target Id. Can contain a [`UserId`] or [`MessageId`]."],["Team","Information about the Team group of the application."],["TeamMember","Information about a Member on a Team."],["ThreadCreateEvent","Requires [`GatewayIntents::GUILDS`]."],["ThreadDeleteEvent","Requires [`GatewayIntents::GUILDS`]."],["ThreadListSyncEvent","Requires [`GatewayIntents::GUILDS`]."],["ThreadMember","Discord docs."],["ThreadMemberFlags","Describes extra features of the message."],["ThreadMemberUpdateEvent","Requires [`GatewayIntents::GUILDS`], and, to receive this event for other users, [`GatewayIntents::GUILD_MEMBERS`]."],["ThreadMembersUpdateEvent","Requires [`GatewayIntents::GUILD_MEMBERS`]."],["ThreadMetadata","A thread data."],["ThreadUpdateEvent","Requires [`GatewayIntents::GUILDS`]."],["ThreadsData","A response to getting several threads channels."],["TriggerMetadata","Individual change for trigger metadata within an audit log entry."],["TypingStartEvent","Requires [`GatewayIntents::GUILD_MESSAGE_TYPING`] or [`GatewayIntents::DIRECT_MESSAGE_TYPING`]."],["UnavailableGuild","Data for an unavailable guild."],["UnknownEvent",""],["User","Information about a user."],["UserId","An identifier for a User"],["UserPublicFlags","User’s public flags"],["UserUpdateEvent","Requires no gateway intents."],["VoiceRegion","Information about an available voice region."],["VoiceServerUpdateEvent","Requires no gateway intents."],["VoiceState","A user’s state within a voice channel."],["VoiceStateUpdateEvent","Requires [`GatewayIntents::GUILD_VOICE_STATES`]."],["Webhook","A representation of a webhook, which is a low-effort way to post messages to channels. They do not necessarily require a bot user or authentication to use."],["WebhookId","An identifier for a [`Webhook`][super::webhook::Webhook]"],["WebhookUpdateEvent","Requires [`GatewayIntents::GUILD_WEBHOOKS`]."]],"trait":[["Mentionable","Allows something - such as a channel or role - to be mentioned in a message."]],"type":[["AttachmentType",""]]};