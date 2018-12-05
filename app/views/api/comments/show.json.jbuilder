json.comment do
  json.extract! @comment, :id, :body, :commenter_id, :photo_id, :commenter
end