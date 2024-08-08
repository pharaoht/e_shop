-- Trigger to delete rows in top_images_join_table when a top is deleted
CREATE TRIGGER after_top_delete_images
AFTER DELETE ON tops
FOR EACH ROW
BEGIN
    DELETE FROM top_images_join_table WHERE top_id = OLD.id;
END

-- Trigger to delete rows in top_sizes_join_table when a top is deleted
CREATE TRIGGER after_top_delete_sizes
AFTER DELETE ON tops
FOR EACH ROW
BEGIN
    DELETE FROM top_sizes_join_table WHERE top_id = OLD.id;
END

-- Trigger to delete rows in top_colors_join_table when a top is deleted
CREATE TRIGGER after_top_delete_colors
AFTER DELETE ON tops
FOR EACH ROW
BEGIN
    DELETE FROM top_colors_join_table WHERE top_id = OLD.id;
END